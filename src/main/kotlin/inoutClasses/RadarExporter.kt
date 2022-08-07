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

    override fun exportToHtml(radar: Radar): List<File> {

        val ringSize = 100
        val marginLeft = 0
        val marginTop = 0

        val jsFile = File("script.js")
        val htmlFile = File("index.html")

        fun generateScript() {

            jsFile.writeText("")

            jsFile.appendText(
                "const randInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min; \n" +

                "function drawRadar(ringsAmount, categoriesAmount, ringSize, marginLeft, marginTop) { \n" +
                    "var point_size = 8; \n" +
                    "var c = document.getElementById(\"radar\"); \n" +
                    "var ctx = c.getContext('2d'); \n" +

                    "function drawCoordSys(ringsAmount, categoriesAmount, ringSize, dash, marginLeft, marginTop) { \n" +
                        "ctx.beginPath(); \n" +
                        "ctx.setLineDash([dash, dash]); \n" +
                        "for(i=0; i<=categoriesAmount; i++) { \n " +
                            "var angle = 360/categoriesAmount*i; \n" +
                            "var x = ringsAmount*ringSize+marginLeft + (ringsAmount*ringSize) * Math.cos(-angle*Math.PI/180);\n" +
                            "var y = ringsAmount*ringSize+marginTop + (ringsAmount*ringSize) * Math.sin(-angle*Math.PI/180);\n" +
                            "ctx.moveTo(ringsAmount*ringSize+marginLeft, ringsAmount*ringSize+marginTop); \n" +
                            "ctx.lineTo(x, y); \n" +
                            "ctx.stroke(); \n" +
                        "} \n" +
                        "ctx.setLineDash([0, 0]); \n" +
                    "} \n" +

                    "function drawRings(ringsAmount, ringSize, marginLeft, marginTop) { \n" +
                        "for(i=1; i<=ringsAmount; i++) { \n" +
                            "ctx.beginPath(); \n" +
                            "ctx.arc(ringsAmount*ringSize+marginLeft, ringsAmount*ringSize+marginTop, ringSize*i, 0, 2*Math.PI);\n" +
                            "ctx.stroke(); \n" +
                        "}\n" +
                    "}\n" +

                    "function drawPoint(center_x, center_y, angle, radius, ringNum, ringSize, label) {\n" +
                        "ctx.fillStyle = 'black'; \n" +
                        "var x = center_x + (radius+ringNum*ringSize) * Math.cos(-angle*Math.PI/180);\n" +
                        "var y = center_y + (radius+ringNum*ringSize) * Math.sin(-angle*Math.PI/180);\n" +
                        "ctx.beginPath();\n" +
                        "ctx.arc(x, y, point_size, 0, 2 * Math.PI);\n" +
                        "ctx.fill();\n" +
                        "ctx.font = 'bold 10px arial';\n" +
                        "ctx.fillStyle = 'red'; \n" +
                        "ctx.fillText(label,x-6,y+4);\n" +
                    "}\n"
            )

            jsFile.appendText(
                "drawCoordSys(ringsAmount, categoriesAmount, ringSize, 5, marginLeft, marginTop) \n" +
                "drawRings(ringsAmount, ringSize, marginLeft, marginTop) \n"
            )

            var i = 0
            radar.technologies.forEach { technology ->
                i+=1
                for(j in 0 until radar.categories.size) {
                    if (technology.category == radar.categories.elementAt(j)) {
                        val startAngle = 360/radar.categories.size *j +5
                        val stopAngle = 360/radar.categories.size *j +360/radar.categories.size -5
                        when(technology.ring) {
                            Ring.Adopt -> jsFile.appendText("drawPoint("+radar.rings.size+"*ringSize+marginLeft, "+radar.rings.size+"*ringSize+marginTop, randInRange("+startAngle+", "+stopAngle+"), randInRange(ringSize/10, ringSize-(ringSize/10)), 0, ringSize, "+i+") \n")
                            Ring.Trial -> jsFile.appendText("drawPoint("+radar.rings.size+"*ringSize+marginLeft, "+radar.rings.size+"*ringSize+marginTop, randInRange("+startAngle+", "+stopAngle+"), randInRange(ringSize/10, ringSize-(ringSize/10)), 1, ringSize, "+i+") \n")
                            Ring.Assess -> jsFile.appendText("drawPoint("+radar.rings.size+"*ringSize+marginLeft, "+radar.rings.size+"*ringSize+marginTop, randInRange("+startAngle+", "+stopAngle+"), randInRange(ringSize/10, ringSize-(ringSize/10)), 2, ringSize, "+i+") \n")
                            Ring.Hold -> jsFile.appendText("drawPoint("+radar.rings.size+"*ringSize+marginLeft, "+radar.rings.size+"*ringSize+marginTop, randInRange("+startAngle+", "+stopAngle+"), randInRange(ringSize/10, ringSize-(ringSize/10)), 3, ringSize, "+i+") \n")
                        }
                    }
                }
            }

            jsFile.appendText("}")
        }

        fun generateHtml() {
            htmlFile.writeText(
                "<!DOCTYPE HTML>\n" +
                    "<html>\n" +
                    "<head>\n" +
                        "<meta charset=\"utf-8\">\n" +
                        "<script src=\"script.js\"></script>\n" +
                    "</head>\n" +
                    "<body onload=\"drawRadar("+radar.rings.size+", "+radar.categories.size+", "+ringSize+", "+marginLeft+", "+marginTop+")\">\n" +
                    "<canvas id=\"radar\" width="+radar.rings.size*250 +" height="+ radar.rings.size*250 +">\n" +
                    "</canvas>\n" +
                    "</body>\n" +
                    "</html>"
            )

        }

        generateHtml()
        generateScript()
        val files: List<File> = listOf(htmlFile, jsFile)
        return files
    }

    override fun exportToPdf(radar: Radar): File {

        val ringsAmount = radar.rings.size
        val categoriesAmount = radar.categories.size
        val ringSize = 50.0
        val centerX = 300.0
        val centerY = 600.0

        val pdfFile = File("radar.pdf")
        val output = FileOutputStream(pdfFile)
        val document = Document()
        val writer = PdfWriter.getInstance(document, output)
        document.open()

        val ctx = writer.directContent
        fun drawRings(ringsAmount: Int) {
            for (i in 1..ringsAmount) {
                ctx.circle(centerX, centerY, i * ringSize)
            }
        }
        drawRings(radar.rings.size)
        ctx.stroke()

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
        drawCoordSys(5.0)

        ctx.setLineDash(0.0, 0.0)

        /*
        when(radar.technologies.forEach{ technology -> technology.ring }) {
            //Ring.Assess -> println("test")
            //Ring.Hold -> println("cos")
        }
         */

        radar.technologies.forEach { technology ->
            when (technology.ring) {
                Ring.Assess -> println("test")
            }
        }
        // SRODEK KOŁA: 300;600
        // LEWY ROG: 100;600
        // PRAWY ROG: 500;600
        // GORNY ROG: 300;800
        // DOLNY ROG: 300;400
        fun drawPoint(centerX: Double, centerY: Double, angle: Int, radius: Int, ringNum: Int, ringSize: Double) {
            val x = centerX + (radius+ringNum*ringSize) * cos(-angle*Math.PI/180)
            val y = centerY + (radius+ringNum*ringSize) * sin(-angle*Math.PI/180)
            ctx.circle(x, y, 3.0)
            ctx.fill()
            ctx.stroke()
        }

        radar.technologies.forEach { technology ->
            for(j in 0 until radar.categories.size) {
                if (technology.category == radar.categories.elementAt(j)) {
                    val startAngle = 360/radar.categories.size *j +5
                    val stopAngle = 360/radar.categories.size *j +360/radar.categories.size -5
                    when(technology.ring) {
                        Ring.Adopt -> drawPoint(300.0, 600.0, (startAngle..stopAngle).random(), (5..50).random(), 0, 50.0)
                        Ring.Trial -> drawPoint(300.0, 600.0, (startAngle..stopAngle).random(), (5..50).random(), 1, 50.0)
                        Ring.Assess -> drawPoint(300.0, 600.0, (startAngle..stopAngle).random(), (5..50).random(), 2, 50.0)
                        Ring.Hold -> drawPoint(300.0, 600.0, (startAngle..stopAngle).random(), (5..50).random(), 3, 50.0)
                    }
                }
            }
        }
        document.close()
        return pdfFile
    }

}