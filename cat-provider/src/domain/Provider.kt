package dev.ilczuk.domain

import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.IdTable
import org.jetbrains.exposed.sql.Column

object Provider : IdTable<String>() {
    override val id: Column<EntityID<String>>
        get() = apiKey
    val apiKey = varchar("api_key", 128).primaryKey().entityId()
    val uses = integer("uses")
    val resetsAt = date("resets_at")
    val lastUse = date("last_use")
}