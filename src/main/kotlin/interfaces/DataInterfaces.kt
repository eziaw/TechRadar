package interfaces

import dataClasses.Radar
import dataClasses.Technology
import java.io.File

interface DataImporter {
    fun importFromCsv(fileName: String): Set<Technology>
    fun importFromJson(fileName: String): Set<Technology>
}

interface DataExporter<R> {
    fun exportToHtml(radar: Radar, fileName: String): List<File>
    fun exportToPdf(radar: Radar, fileName: String): File
}