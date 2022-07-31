package inoutClasses

import dataClasses.Radar
import dataClasses.generateRadar
import interfaces.DataExporter
import interfaces.DataImporter
import org.junit.jupiter.api.Test

internal class RadarExporterTest {

    val exporter: DataExporter<Radar> = RadarExporter()
    val importer: DataImporter = RadarDataImporter()

    @Test
    fun pdf() {
        val import = importer.importFromCsv("src/main/resources/ZalandoTechnologies.csv").generateRadar()
        exporter.exportToHtml(import)
    }
}