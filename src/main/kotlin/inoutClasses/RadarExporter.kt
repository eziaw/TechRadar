package inoutClasses

import dataClasses.Radar
import interfaces.DataExporter
import java.io.File
import java.io.FileOutputStream
import com.itextpdf.text.Document
import com.itextpdf.text.pdf.PdfWriter
import enums.Ring
import kotlin.math.cos
import kotlin.math.sin

class RadarExporter: DataExporter<Radar> {

    override fun exportToHtml(radar: Radar, fileName: String): List<File> {

        val htmlFile = File("$fileName.html")
        val jsFile = File("$fileName.js")

        fun generateJsFile(marginLeft: Int, marginTop: Int, ringSize: Int, pointSize: Int) {

            val ringsAmount = radar.rings.size
            val categoriesAmount = radar.categories.size

            val centerX = radar.rings.size*ringSize+marginLeft
            val centerY = radar.rings.size*ringSize+marginTop

            fun drawCoordSys(dash: Int) {
                jsFile.appendText(
                    "ctx.beginPath(); \n" +
                    "ctx.setLineDash([$dash, $dash]) \n"
                )
                for(i in 0 .. categoriesAmount) {
                    val angle = 360/categoriesAmount*i
                    val x = centerX + (ringsAmount*ringSize) * cos(-angle*Math.PI/180)
                    val y = centerY + (ringsAmount*ringSize) * sin(-angle*Math.PI/180)
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
                for(i in 1 .. ringsAmount) {
                    jsFile.appendText(
                        "ctx.beginPath(); \n" +
                        "ctx.arc($centerX, $centerY, $ringSize*$i, 0, 2*Math.PI);\n" +
                        "ctx.stroke(); \n"
                    )
                }
            }

            fun addPoint(angle: Int, ringRadius: Int, ringNum: Int, ringSize: Int, label: String) {
                val x = centerX + (ringRadius+ringNum*ringSize) * cos(-angle*Math.PI/180)
                val y = centerY + (ringRadius+ringNum*ringSize) * sin(-angle*Math.PI/180)
                jsFile.appendText(
                    "drawPoint($x, $y, $pointSize, $label) \n"
                )
            }

            jsFile.writeText("")

            jsFile.appendText(
                "function drawRadar() { \n" +
                    "var c = document.getElementById(\"radar\"); \n" +
                    "var ctx = c.getContext('2d'); \n" +
                    "function drawPoint(x, y, pointSize, label) {\n" +
                        "ctx.fillStyle = 'black'; \n" +
                        "ctx.beginPath();\n" +
                        "ctx.arc(x, y, pointSize, 0, 2*Math.PI);\n" +
                        "ctx.fill();\n" +
                        "ctx.font = 'bold 14px arial';\n" +
                        "ctx.fillStyle = 'green'; \n" +
                        "ctx.fillText(label, x-8, y+6);\n" +
                    "}\n"
            )

            drawCoordSys(5)
            drawRings()

            var i = 0
            radar.technologies.forEach { technology ->
                i+=1
                for(j in 0 until radar.categories.size) {
                    if (technology.category == radar.categories.elementAt(j)) {
                        val startAngle = 360/radar.categories.size *j +5
                        val stopAngle = 360/radar.categories.size *j +360/radar.categories.size -5
                        val angle = (startAngle..stopAngle).random()
                        val radius = (ringSize/10 .. ringSize-(ringSize/10)).random()
                        when(technology.ring) {
                            Ring.Adopt -> addPoint(angle, radius, 0, ringSize, i.toString())
                            Ring.Trial -> addPoint(angle, radius, 1, ringSize, i.toString())
                            Ring.Assess -> addPoint(angle, radius, 2, ringSize, i.toString())
                            Ring.Hold -> addPoint(angle, radius, 3, ringSize, i.toString())
                        }
                    }
                }
            }

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
                    "<canvas id=\"radar\" width=900 height="+ radar.rings.size*250 +" style='float:left'>\n" +
                    "</canvas>\n" +
                        "</div> \n"
            )
            var tech2 = mutableListOf<String>()
            radar.categories.forEach { category ->
                htmlFile.appendText(
                    "<div style='float:left; padding:25px'> \n" +
                            "<p><b>"+category.name+"</b></p> \n"
                )
                radar.technologies.forEachIndexed { index, technology ->
                    if (technology.category == category) {
                        htmlFile.appendText("<p>"+(index+1)+". "+technology.name+ "</p>")
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
        val files: List<File> = listOf(htmlFile, jsFile)
        return files
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
        fun drawPoint(angle: Int, radius: Int, ringNum: Int, ringSize: Double) {
            val x = centerX + (radius+ringNum*ringSize) * cos(-angle*Math.PI/180)
            val y = centerY + (radius+ringNum*ringSize) * sin(-angle*Math.PI/180)
            ctx.circle(x, y, 3.0)
            ctx.fill()
            ctx.stroke()
        }

        drawCoordSys(5.0)
        ctx.setLineDash(0.0, 0.0)
        drawRings(radar.rings.size)

        radar.technologies.forEach { technology ->
            for(j in 0 until radar.categories.size) {
                if (technology.category == radar.categories.elementAt(j)) {
                    val startAngle = 360/radar.categories.size *j +5
                    val stopAngle = 360/radar.categories.size *j +360/radar.categories.size -5
                    val angle = (startAngle..stopAngle).random()
                    val radius = (5..ringSize.toInt()-5).random()
                    when(technology.ring) {
                        Ring.Adopt -> drawPoint(angle, radius, 0, ringSize)
                        Ring.Trial -> drawPoint(angle, radius, 1, ringSize)
                        Ring.Assess -> drawPoint(angle, radius, 2, ringSize)
                        Ring.Hold -> drawPoint(angle, radius, 3, ringSize)
                    }
                }
            }
        }

        document.close()
        return pdfFile
    }

}