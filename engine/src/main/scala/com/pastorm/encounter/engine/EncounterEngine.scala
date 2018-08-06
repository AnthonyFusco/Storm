package com.pastorm.encounter.engine

import com.pastorm.encounter.engine.configuration.InitiativeEngineComponent
import com.pastorm.model.{Block, EncounterData, Monster}

import scala.scalajs.js.annotation.JSExport

class EncounterEngine() extends GameEngine {
  this: InitiativeEngineComponent =>
  private var encounterData: EncounterData = EncounterData(Seq(), "", 0)

  @JSExport
  override def newMonster(name: String, block: Block): Unit =
    if (getMonsterByName(name).nonEmpty)
      println(s"$name already exists in the encounter.")
    else
      encounterData = encounterData.copy(monsters = encounterData.monsters :+ createBaseMonster(name, Block("goblin", List(), List(), List(), List())))

  @JSExport
  override def getEncounterData: EncounterData = {
    val ordered = encounterData.monsters
      .sortWith((l, r) => {
        if (l.initiative == r.initiative) {
          l.name < r.name
        } else {
          l.initiative.getOrElse(0) < r.initiative.getOrElse(0)
        }
      })
      .reverse
    encounterData.copy(monsters = ordered)
  }

  @JSExport
  override def getMonsterByName(name: String): Option[Monster] =
    encounterData.monsters.find(monster => monster.name == name)

  @JSExport
  override def getPlayingMonsterName: String = encounterData.playingMonsterName

  @JSExport
  override def rollInitiative(): Unit = {
    encounterData = encounterData.copy(monsters = initiativeEngine.rollInitiatives(encounterData.monsters))
    if (encounterData.playingMonsterName.equals("")) nextTurn()
  }

  @JSExport
  override def nextTurn(): Unit = encounterData = initiativeEngine.nextTurn(encounterData)

  @JSExport
  override def getPlayingMonster: Option[Monster] = getMonsterByName(encounterData.playingMonsterName)

  @JSExport
  override def updateMonster(monster: Monster): Unit =
    encounterData =
      encounterData.copy(monsters = encounterData.monsters.filterNot(m => m.name.equals(monster.name)) :+ monster)

  @JSExport
  override def damage(name: String, damage: Int): Option[Monster] =
    getMonsterByName(name).map(m => m.copy(hitPoints = m.hitPoints.map(hp => hp + damage)))

  private def createBaseMonster(name: String, block: Block): Monster =
    Monster(block, name, hitPoints = block.findStat("hp").map(stat => stat.statValue.instantiateValue))

  @JSExport
  override def reset(): Unit = encounterData = EncounterData(Seq(), "", 0)

  @JSExport
  override def getTurn: Int = encounterData.turn

  @JSExport
  override def remove(name: String): Unit = {
    encounterData = encounterData.copy(monsters = encounterData.monsters.filterNot(m => m.name.equals(name)))
    if (encounterData.playingMonsterName.equals(name)) {
      nextTurn()
    }
  }

  @JSExport
  override def setInitiative(name: String, value: Int): Option[Monster] =
    getMonsterByName(name).map(_.copy(initiative = Some(value)))

}