package dev.ilczuk.domain

import org.jetbrains.exposed.sql.Table

object UserToImage : Table() {
    val user = reference("user", User)
    val image = reference("image", Image)
}