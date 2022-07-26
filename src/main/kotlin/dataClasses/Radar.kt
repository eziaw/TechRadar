package dataClasses

import enums.Category
import enums.Ring

data class Radar(
    val technologies: Set<Technology>,
    val ringsAmount: Int = checkRingsAmount(technologies),
    val categoriesAmount: Int = checkCategoriesAmount(technologies)
)

fun checkRingsAmount(technologies: Set<Technology>): Int {
    val rings = mutableSetOf<Ring>()
    technologies.forEach{
            technology -> rings.add(technology.ring)
    }
    return rings.size
}

fun checkCategoriesAmount(technologies: Set<Technology>): Int {
    val categories = mutableSetOf<Category>()
    technologies.forEach{
            technology -> categories.add(technology.category)
    }
    return categories.size
}

fun Set<Technology>.generateRadar(): Radar = Radar(
    this,
    checkRingsAmount(this),
    checkCategoriesAmount(this)
)