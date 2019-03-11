package dev.ilczuk.entities

import dev.ilczuk.domain.Providers
import org.jetbrains.exposed.dao.Entity
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.EntityID

class Provider(id: EntityID<String>) : Entity<String>(id) {
    companion object : EntityClass<String, Provider>(Providers)

    var apiKey by Providers.apiKey
    var uses by Providers.uses
    var resetsAt by Providers.resetsAt
    var lastUse by Providers.lastUse
}