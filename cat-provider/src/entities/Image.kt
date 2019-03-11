package dev.ilczuk.entities

import dev.ilczuk.domain.Images
import dev.ilczuk.domain.UsersToImages
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass

class Image(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Image>(Images)
    var url by Images.url
    var type by Images.type
    var users by User via UsersToImages
}