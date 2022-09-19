package inoutClasses

import com.itextpdf.text.BaseColor
import dataClasses.Radar
import interfaces.DataExporter
import java.io.File
import java.io.FileOutputStream
import com.itextpdf.text.Document
import com.itextpdf.text.Element
import com.itextpdf.text.pdf.BaseFont
import com.itextpdf.text.pdf.PdfWriter
import enums.Ring
import java.util.HexFormat
import kotlin.math.cos
import kotlin.math.pow
import kotlin.math.sin
import kotlin.math.sqrt

class RadarExporter: DataExporter<Radar> {

    override fun exportToHtml(radar: Radar, fileName: String): List<File> {

        val htmlFile = File("$fileName.html")
        val jsFile = File("$fileName.js")

        fun generateJsFile(marginLeft: Int, marginTop: Int, ringSize: Int, pointSize: Int) {

            val ringsAmount = radar.rings.size
            val categoriesAmount = radar.categories.size

            val centerX = radar.rings.size * ringSize + marginLeft
            val centerY = radar.rings.size * ringSize + marginTop

            fun drawCoordSys(dash: Int) {
                jsFile.appendText(
                    "ctx.beginPath(); \n" +
                            "ctx.setLineDash([$dash, $dash]) \n"
                )
                for (i in 0..categoriesAmount) {
                    val angle = 360 / categoriesAmount * i
                    val x = centerX + (ringsAmount * ringSize) * cos(-angle * Math.PI / 180)
                    val y = centerY + (ringsAmount * ringSize) * sin(-angle * Math.PI / 180)
                    jsFile.appendText(
                        "ctx.moveTo($centerX, $centerY) \n" +
                                "ctx.lineTo($x, $y) \n" +
                                "ctx.stroke() \n"
                    )
                }
                jsFile.appendText(
                    "ctx.setLineDash([0, 0]) \n"
                )
            }

            fun drawRings() {
                for (i in 1..ringsAmount) {
                    jsFile.appendText(
                        "ctx.beginPath(); \n" +
                                "ctx.arc($centerX, $centerY, $ringSize*$i, 0, 2*Math.PI);\n" +
                                "ctx.stroke(); \n"
                    )
                }
            }

            fun addPoint(angle: Int, radius: Int, ringNum: Int, ringSize: Int, label: String, color: String): Double {
                val x = centerX + (radius + ringNum * ringSize) * cos(-angle * Math.PI / 180)
                val y = centerY + (radius + ringNum * ringSize) * sin(-angle * Math.PI / 180)
                jsFile.appendText(
                    "ctx.fillStyle = '$color'; \n" +
                    "drawPoint($x, $y, $pointSize, $label) \n"
                )
                return sqrt(x.pow(2)+y.pow(2))
            }

            jsFile.writeText("")

            jsFile.appendText(
                "function drawRadar() { \n" +
                        "var c = document.getElementById(\"radar\"); \n" +
                        "var ctx = c.getContext('2d'); \n" +
                        "function drawPoint(x, y, pointSize, label) {\n" +
                        "ctx.beginPath();\n" +
                        "ctx.arc(x, y, pointSize, 0, 2*Math.PI);\n" +
                        "ctx.fill();\n" +
                        "ctx.font = 'bold 14px arial';\n" +
                        "ctx.fillStyle = 'black'; \n" +
                        "if(label.toString().length>1) \n" +
                            "ctx.fillText(label, x-8, y+5); \n" +
                        "else \n" +
                            "ctx.fillText(label, x-4, y+5); \n" +
                        "}\n"
            )

            drawCoordSys(5)
            drawRings()

            val tabu = mutableSetOf<Double>()
            radar.technologies.forEachIndexed { index, technology ->
                for (j in 0 until radar.categories.size) {
                    val color: String = when(j) {
                        0, 4 -> "blue"
                        1, 5 -> "red"
                        2, 6 -> "yellow"
                        3, 7 -> "green"
                        else -> "pink"
                    }
                    if (technology.category == radar.categories.elementAt(j)) {
                        val startAngle = 360 / radar.categories.size * j + 5
                        val stopAngle = 360 / radar.categories.size * j + 360 / radar.categories.size - 5
                        val angle = (startAngle..stopAngle).random()
                        val radius = (ringSize / 10..ringSize - (ringSize / 10)).random()
                        when (technology.ring) {
                            Ring.Adopt -> tabu.add(addPoint(angle, radius, 0, ringSize, (index + 1).toString(), color))
                            Ring.Trial -> tabu.add(addPoint(angle, radius, 1, ringSize, (index + 1).toString(), color))
                            Ring.Assess -> tabu.add(addPoint(angle, radius, 2, ringSize, (index + 1).toString(), color))
                            Ring.Hold -> tabu.add(addPoint(angle, radius, 3, ringSize, (index + 1).toString(), color))
                        }
                    }
                }
            }
            tabu.forEach { i -> println(i)}

            jsFile.appendText("}")
        }

        fun generateHtml() {
            htmlFile.writeText("")
            htmlFile.appendText(
                "<!DOCTYPE HTML>\n" +
                        "<html>\n" +
                        "<head>\n" +
                        "<meta charset=\"utf-8\">\n" +
                        "<script src=\"$fileName.js\"></script>\n" +
                        "</head>\n" +
                        "<body onload=\"drawRadar()\">\n" +
                        "<div id='canvas'> \n" +
                        "<canvas id=\"radar\" width=900 height=" + radar.rings.size * 250 + " style='float:left'>\n" +
                        "</canvas>\n" +
                        "</div> \n"
            )

            radar.categories.forEach { category ->
                htmlFile.appendText(
                    "<div style='float:left; padding:25px'> \n" +
                            "<p><b>" + category.name + "</b></p> \n"
                )
                radar.technologies.forEachIndexed { index, technology ->
                    if (technology.category == category) {
                        htmlFile.appendText("<p>" + (index + 1) + ". " + technology.name + "</p>")
                    }
                }
                htmlFile.appendText(
                    "</div> \n"
                )
            }
            htmlFile.appendText(
                "</body>\n" +
                        "</html>"
            )
        }

        generateHtml()
        generateJsFile(50, 50, 100, 9)
        return listOf(htmlFile, jsFile)
    }

    override fun exportToPdf(radar: Radar, fileName: String): File {

        val ringsAmount = radar.rings.size
        val categoriesAmount = radar.categories.size
        val ringSize = 50.0
        val centerX = 300.0
        val centerY = 600.0

        val pdfFile = File("$fileName.pdf")
        val output = FileOutputStream(pdfFile)
        val document = Document()
        val writer = PdfWriter.getInstance(document, output)
        document.open()

        val ctx = writer.directContent
        val font = BaseFont.createFont(BaseFont.TIMES_BOLD, "UTF-8", false)
        ctx.setFontAndSize(font, 7F)

        fun drawRings(ringsAmount: Int) {
            for (i in 1..ringsAmount) {
                ctx.circle(centerX, centerY, i*ringSize)
            }
            ctx.stroke()
        }

        fun drawCoordSys(dash: Double) {
            ctx.setLineDash(dash, dash)
            for(i in 0 .. categoriesAmount) {
                val angle = 360/categoriesAmount*i
                val x = centerX + (ringsAmount*ringSize) * cos(-angle*Math.PI/180)
                val y = centerY + (ringsAmount*ringSize) * sin(-angle*Math.PI/180)
                ctx.moveTo(centerX, centerY)
                ctx.lineTo(x, y)
                ctx.stroke()
            }
        }

        // SRODEK KOŁA: 300;600 // LEWY ROG: 100;600 // PRAWY ROG: 500;600 // GORNY ROG: 300;800 // DOLNY ROG: 300;400
        fun drawPoint(angle: Int, radius: Int, ringNum: Int, ringSize: Double, label: Int, color: BaseColor) {
            ctx.setColorFill(color)
            val x = centerX + (radius+ringNum*ringSize) * cos(-angle*Math.PI/180)
            val y = centerY + (radius+ringNum*ringSize) * sin(-angle*Math.PI/180)
            ctx.circle(x, y, 4.0)
            ctx.fill()
            ctx.beginText()
            ctx.setColorFill(BaseColor.BLACK)
            ctx.showTextAligned(Element.ALIGN_CENTER, (label+1).toString(), x.toFloat(), (y-2).toFloat(), 0F)
            ctx.endText()
            ctx.stroke()
        }

        drawCoordSys(5.0)
        ctx.setLineDash(0.0, 0.0)
        drawRings(radar.rings.size)

        radar.technologies.forEachIndexed { index, technology ->
            for(j in 0 until radar.categories.size) {
                val color: BaseColor = when(j) {
                    0, 4 -> BaseColor.BLUE
                    1, 5 -> BaseColor.RED
                    2, 6 -> BaseColor.YELLOW
                    3, 7 -> BaseColor.GREEN
                    else -> BaseColor.PINK
                }
                if (technology.category == radar.categories.elementAt(j)) {
                    val startAngle = 360/radar.categories.size *j +5
                    val stopAngle = 360/radar.categories.size *j +360/radar.categories.size -5
                    val angle = (startAngle..stopAngle).random()
                    val radius = (5..ringSize.toInt()-5).random()
                    when(technology.ring) {
                        Ring.Adopt -> drawPoint(angle, radius, 0, ringSize, index, color)
                        Ring.Trial -> drawPoint(angle, radius, 1, ringSize, index, color)
                        Ring.Assess -> drawPoint(angle, radius, 2, ringSize, index, color)
                        Ring.Hold -> drawPoint(angle, radius, 3, ringSize, index, color)
                    }
                }
            }
        }

        document.close()
        return pdfFile
    }

}