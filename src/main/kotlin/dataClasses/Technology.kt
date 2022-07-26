package dataClasses

import enums.Category
import enums.Ring
import enums.Stability

data class Technology(
    val name: String,
    val description: String,
    val category: Category,
    val ring: Ring,
    val stability: Stability
)
