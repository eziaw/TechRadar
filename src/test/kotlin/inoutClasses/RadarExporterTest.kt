package inoutClasses

import assertk.assertThat
import assertk.assertions.isTrue
import dataClasses.Radar
import dataClasses.generateRadar
import interfaces.DataExporter
import interfaces.DataImporter
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource
import java.io.File

internal class RadarExporterTest {

    private val exporter: DataExporter<Radar> = RadarExporter()
    private val importer: DataImporter = RadarDataImporter()
    private val exportName = "radar"

    @ParameterizedTest
    @ValueSource(strings = ["src/main/resources/ZalandoTechnologies.csv"])
    fun pdfExporterTest(fileName: String) {
        // given
        val import = importer.importFromCsv(fileName).generateRadar()

        // when
        exporter.exportToPdf(import, exportName)

        // then
        assertThat(File("$exportName.pdf").exists()).isTrue()
    }

    @ParameterizedTest
    @ValueSource(strings = ["src/main/resources/ZalandoTechnologies.csv"])
    fun htmlExporterTest(fileName: String) {
        // given
        val import = importer.importFromCsv(fileName).generateRadar()

        // when
        exporter.exportToHtml(import, exportName)

        // then
        assertThat(File("$exportName.html").exists()).isTrue()
        assertThat(File("$exportName.js").exists()).isTrue()
    }
}