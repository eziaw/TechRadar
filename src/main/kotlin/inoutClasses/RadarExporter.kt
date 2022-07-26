package inoutClasses

import dataClasses.Radar
import interfaces.DataExporter
import java.io.File
import java.io.FileOutputStream
import com.itextpdf.text.Document
import com.itextpdf.text.Element
import com.itextpdf.text.pdf.BaseFont
import com.itextpdf.text.pdf.PdfWriter
import dataClasses.Technology
import enums.Ring

class RadarExporter: DataExporter<Radar> {

    override fun exportToHtml(radar: Radar): File {

        val ringsAmount = radar.ringsAmount
        val categoriesAmount = radar.categoriesAmount

        val jsFile = File("script.js")
        val htmlFile = File("index.html")

        fun generateScript() {
            //val jsFile = File("script.js")
            jsFile.writeText(
                "const randInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min; \n" +
                        "function drawRadar(\"+ringsAmount+\", \"+radar.technologies+\") {\n" +
                        "var point_size = 5;\n" +
                        "var c = document.getElementById(\"radar\");\n" +
                        "var ctx = c.getContext('2d');\n" +

                        "function drawCoordSys(\"+ringsAmount+\", ringSize, dash) {\n" +
                        "ctx.beginPath();\n" +
                        "ctx.setLineDash([dash, dash]);\n" +
                        "ctx.moveTo(*ringSize, 0);\n" +
                        "ctx.lineTo(\"+ringsAmount+\"*ringSize, \"+ringsAmount+\"*ringSize*2);\n" +
                        "ctx.moveTo(0, \"+ringsAmount+\"*ringSize);\n" +
                        "ctx.lineTo(\"+ringsAmount+\"*ringSize*2, \"+ringsAmount+\"*ringSize);\n" +
                        "ctx.stroke();\n" +
                        "ctx.setLineDash([0, 0]);\n" +
                        "}\n" +

                        "function drawCircle(center_x, center_y, radius) {\n" +
                        "ctx.beginPath();\n" +
                        "ctx.arc(center_x, center_y, radius, 0, 2*Math.PI);\n" +
                        "ctx.stroke();\n" +
                        "}\n" +

                        "function drawPoint(center_x, center_y, angle, radius, ringNum, ringSize, label) {\n" +
                        "ctx.fillStyle = 'black'; \n" +
                        "var x = center_x + (radius+ringNum*ringSize) * Math.cos(-angle*Math.PI/180);\n" +
                        "var y = center_y + (radius+ringNum*ringSize) * Math.sin(-angle*Math.PI/180);\n" +

                        "ctx.beginPath();\n" +
                        "ctx.arc(x, y, point_size, 0, 2 * Math.PI);\n" +
                        "ctx.fill();\n" +
                        "ctx.font = 'bold 5px arial';\n" +
                        "ctx.fillStyle = 'white'; \n" +
                        "ctx.fillText(label,x,y);\n" +
                        "}\n" +

                        "drawCoordSys(\"+ringsAmount+\", 100, 5) \n" +
                        "for(i=1; i<=\"+ringsAmount+\"; i++) { \n" +
                        "drawCircle(\"+ringsAmount+\"*100, \"+ringsAmount+\"*100, i*100);\n" +
                        "}\n" +
                        "for(i=1; i<=\"+radar.technologies.size+\"; i++) { \n" +
                        "drawPoint(\"+ringsAmount+\"*100, \"+ringsAmount+\"*100, randInRange(0, 360), randInRange(0, 100), randInRange(0, 4), 100, i);\n" +
                        "}" +
                        "}"
            )
        }

        fun generateHtml() {
            //val htmlFile = File("index.html")
            htmlFile.writeText(
                "<!DOCTYPE HTML>\n" +
                        "<html>\n" +
                        "<head>\n" +
                        "<meta charset=\"utf-8\">\n" +
                        "<script src=\"script.js\"></script>\n" +
                        "</head>\n" +
                        "<body onload=\"drawRadar("+radar.ringsAmount+","+radar.technologies+")\">\n" +
                        "<canvas id=\"radar\", width="+ radar.ringsAmount*250 +", height="+ radar.ringsAmount*250 +">\n" +
                        "</canvas>\n" +
                        "</body>\n" +
                        "</html>"
            )

        }

        fun testowo() {
            generateScript()
            generateHtml()
        }

        return jsFile
    }

    override fun exportToPdf(radar: Radar): File {

        val ringsAmount = radar.ringsAmount
        val categoriesAmount = radar.categoriesAmount

        val pdfFile = File("radar.pdf")
        val output = FileOutputStream(pdfFile)
        val document = Document()
        val writer = PdfWriter.getInstance(document, output)
        document.open()

        val ctx = writer.directContent
        fun drawCircle(ringsAmount: Int) {
            for (i in 1..4) {
                ctx.circle(radar.ringsAmount * 75.0, radar.ringsAmount * 150.0, i * 50.0)
            }
        }
        drawCircle(ringsAmount)
        ctx.stroke()

        fun drawCoordSys(dash: Double) {
            ctx.setLineDash(dash, dash)
            ctx.moveTo(radar.ringsAmount * 75.0, radar.ringsAmount * 200.0)
            ctx.lineTo(radar.ringsAmount * 75.0, radar.ringsAmount / 2 * 200.0)
            ctx.moveTo(radar.ringsAmount / 2 * 50.0, radar.ringsAmount * 150.0)
            ctx.lineTo(radar.ringsAmount * 2.5 * 50.0, radar.ringsAmount * 150.0)
            ctx.stroke()
        }
        drawCoordSys(5.0)

        ctx.setLineDash(0.0, 0.0)

        when(radar.technologies.forEach{ technology -> technology.ring }) {
            //Ring.Assess -> println("test")
            //Ring.Hold -> println("cos")
        }
        // SRODEK KOŁA: 300;600
        // LEWY ROG: 100;600
        // PRAWY ROG: 500;600
        // GORNY ROG: 300;800
        // DOLNY ROG: 300;400
        ctx.circle(250.0, 750.0, 3.0)
        ctx.fill()
        ctx.stroke()
        document.close()
        return pdfFile
    }

}