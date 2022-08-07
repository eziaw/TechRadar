import inoutClasses.RadarDataImporter
import dataClasses.generateRadar
import interfaces.DataImporter
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource

internal class RadarDataImporterTest {

    val importer: DataImporter = RadarDataImporter()

    @ParameterizedTest
    @ValueSource(strings = ["src/main/resources/ZalandoTechnologies.csv"])
    fun testCsv(fileName: String) {
        val import = importer.importFromCsv(fileName).generateRadar()
        val expectedRingsAmount = 4
        Assertions.assertEquals(expectedRingsAmount, import.rings)
        val expectedCategoriesAmount = 4
        Assertions.assertEquals(expectedCategoriesAmount, import.categories)
        //val expectedTechAmount = 72
        //Assertions.assertEquals(expectedTechAmount, import.technologies.size)
    }

    @ParameterizedTest
    @ValueSource(strings = ["src/main/resources/ZalandoTechnologies.json"])
    fun testJson(fileName: String) {
        val import = importer.importFromJson(fileName).generateRadar()
        val expectedRingsAmount = 4
        Assertions.assertEquals(expectedRingsAmount, import.rings)
        val expectedCategoriesAmount = 2
        Assertions.assertEquals(expectedCategoriesAmount, import.categories)
        //val expectedTechAmount = 5
        //Assertions.assertEquals(expectedTechAmount, import.technologies.size)
    }
}