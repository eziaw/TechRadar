package inoutClasses

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import dataClasses.Technology
import enums.Category
import enums.Ring
import enums.Stability
import interfaces.DataImporter
import java.io.BufferedReader
import java.io.File
import java.io.FileReader

class RadarDataImporter: DataImporter {

    override fun importFromCsv(fileName: String): Set<Technology> {

        val technologies = mutableSetOf<Technology>()
        val csvFile = File(fileName)
        BufferedReader(FileReader(csvFile)).use { br ->
            br.readLine()
            var line: String?
            while (br.readLine().also { line = it } != null) {
                val row = line?.split(";")
                val technology = Technology(
                    name = row?.get(0).toString(),
                    description = row?.get(1).toString(),
                    category = Category.valueOf(row!![2]),
                    ring = Ring.valueOf(row[3]),
                    stability = Stability.valueOf(row[4])
                )
                technologies.add(technology)
            }
        }
        technologies.forEach{
                technology -> println(technology)
        }

        return technologies
    }

    override fun importFromJson(fileName: String): Set<Technology> {

        val mapper = jacksonObjectMapper()

        val jsonFile: String = File(fileName).readText()
        val technologies: Set<Technology> = mapper.readValue(jsonFile)
        technologies.forEach{
                technology -> println(technology)
        }

        return technologies
    }
}