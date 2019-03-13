package dev.ilczuk.core

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import dev.ilczuk.domain.Images
import dev.ilczuk.domain.Providers
import dev.ilczuk.domain.Users
import dev.ilczuk.domain.UsersToImages
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import java.util.*


object Db {
    init {
        Database.connect(buildDatasource())
        SchemaUtils.create(Images, Providers, Users, UsersToImages)
    }

    //DEV configuration, prod should be loaded from env
    private fun buildDatasource(): HikariDataSource {
        val props = Properties()
        props.setProperty("dataSourceClassName", "org.postgresql.ds.PGSimpleDataSource")
        props.setProperty("dataSource.user", "kitten")
        props.setProperty("dataSource.password", "kitten")
        props.setProperty("dataSource.databaseName", "kitten")
        props.setProperty("dataSource.serverName", "localhost")
        props.setProperty("dataSource.portNumber", "5432")
        return HikariDataSource(HikariConfig(props))
    }
}
