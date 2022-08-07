package dataClasses

import enums.Category
import enums.Ring

data class Radar(
    val technologies: Set<Technology>,
    val rings: Set<Ring> = checkRingsAmount(technologies),
    val categories: Set<Category> = checkCategoriesAmount(technologies)
)

fun checkRingsAmount(technologies: Set<Technology>): Set<Ring> {
    val rings = mutableSetOf<Ring>()
    technologies.groupBy{
            technology -> rings.add(technology.ring)
    }
    return rings
}

fun checkCategoriesAmount(technologies: Set<Technology>): Set<Category> {
    val categories = mutableSetOf<Category>()
    technologies.groupBy{
            technology -> categories.add(technology.category)
    }
    return categories
}

fun Set<Technology>.generateRadar(): Radar = Radar(
    this,
    checkRingsAmount(this),
    checkCategoriesAmount(this)
)