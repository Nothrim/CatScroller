package dev.ilczuk.entities

import dev.ilczuk.domain.Users
import dev.ilczuk.domain.UsersToImages
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import java.util.*

class User(id: EntityID<UUID>) : UUIDEntity(id) {
    companion object : UUIDEntityClass<User>(Users)

    var images by Image via UsersToImages
}