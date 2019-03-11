package dev.ilczuk.domain

import org.jetbrains.exposed.sql.Table

object UsersToImages : Table() {
    val user = reference("user", Users)
    val image = reference("image", Images)
}