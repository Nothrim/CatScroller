package dev.ilczuk.domain

import org.jetbrains.exposed.dao.IntIdTable
import org.jetbrains.exposed.sql.ReferenceOption

object Images : IntIdTable() {
    val url = varchar("url", 300)
    val type = varchar("type", 20)
    val provider = reference("provider", Providers, onDelete = ReferenceOption.CASCADE)
}