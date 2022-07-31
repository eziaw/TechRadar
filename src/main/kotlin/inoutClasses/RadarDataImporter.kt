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
        val csvFile = File(fileName).readLines().drop(1).forEach {
            val line = it.split(";")
            technologies.add(
                Technology(
                    name = line[0],
                    description = line[1],
                    category = Category.valueOf(line[2]),
                    ring = Ring.valueOf(line[3]),
                    stability = Stability.valueOf(line[4])
                )
            )
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