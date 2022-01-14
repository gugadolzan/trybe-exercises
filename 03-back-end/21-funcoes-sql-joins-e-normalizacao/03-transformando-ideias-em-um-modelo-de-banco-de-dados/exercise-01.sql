-- -----------------------------------------------------
-- Schema zoologico
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `zoologico`;

CREATE SCHEMA `zoologico`;

USE `zoologico`;

-- -----------------------------------------------------
-- Table `zoologico`.`animal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zoologico`.`animal` (
  `animal_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `especie` VARCHAR(45) NOT NULL,
  `sexo` VARCHAR(45) NOT NULL,
  `idade` INT NOT NULL,
  `localizacao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`animal_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `zoologico`.`gerente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zoologico`.`gerente` (
  `gerente_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`gerente_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `zoologico`.`cuidador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zoologico`.`cuidador` (
  `cuidador_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `gerente_id` INT NOT NULL,
  PRIMARY KEY (`cuidador_id`),
  FOREIGN KEY (`gerente_id`) REFERENCES `zoologico`.`gerente` (`gerente_id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `zoologico`.`animal_cuidador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zoologico`.`animal_cuidador` (
  `animal_id` INT NOT NULL,
  `cuidador_id` INT NOT NULL,
  PRIMARY KEY (`animal_id`, `cuidador_id`),
  FOREIGN KEY (`animal_id`) REFERENCES `zoologico`.`animal` (`animal_id`),
  FOREIGN KEY (`cuidador_id`) REFERENCES `zoologico`.`cuidador` (`cuidador_id`)
) ENGINE = InnoDB;