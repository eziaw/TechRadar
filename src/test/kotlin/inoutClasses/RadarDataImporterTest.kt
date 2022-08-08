import assertk.Assert
import assertk.assertThat
import assertk.assertions.isEqualTo
import assertk.assertions.support.expected
import assertk.assertions.support.show
import dataClasses.Technology
import inoutClasses.RadarDataImporter
import dataClasses.generateRadar
import enums.Ring
import interfaces.DataImporter
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource

internal class RadarDataImporterTest {

    private val importer: DataImporter = RadarDataImporter()

    private fun Assert<Technology>.hasRing(expected: Ring) = given { actual ->
        if (actual.ring == expected) return
        expected("ring:${show(expected)} but was ring:${show(actual.ring)}")
    }

    @ParameterizedTest
    @ValueSource(strings = ["src/main/resources/ZalandoTechnologies.csv"])
    fun testCsv(fileName: String) {
        // given
        val import = importer.importFromCsv(fileName).generateRadar()

        // then
        val expectedRingsAmount = 4
        val expectedCategoriesAmount = 4
        val expectedTechAmount = 72

        // when
        assertThat(import.rings.size).isEqualTo(expectedRingsAmount)
        assertThat(import.categories.size).isEqualTo(expectedCategoriesAmount)
        assertThat(import.technologies.size).isEqualTo(expectedTechAmount)
        assertThat(import.technologies.elementAt(1)).hasRing(Ring.Trial)
    }

    @ParameterizedTest
    @ValueSource(strings = ["src/main/resources/ZalandoTechnologies.json"])
    fun testJson(fileName: String) {
        // given
        val import = importer.importFromJson(fileName).generateRadar()

        // when
        val expectedRingsAmount = 4
        val expectedCategoriesAmount = 2
        val expectedTechAmount = 5

        // when
        assertThat(import.rings.size).isEqualTo(expectedRingsAmount)
        assertThat(import.categories.size).isEqualTo(expectedCategoriesAmount)
        assertThat(import.technologies.size).isEqualTo(expectedTechAmount)
    }
}