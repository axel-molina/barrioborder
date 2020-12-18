-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-12-2020 a las 12:12:49
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `molina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `subtitulo` text COLLATE latin1_spanish_ci NOT NULL,
  `cuerpo` text COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Estreno en Youtube', '', '¡HOY! En nuestro Canal de YouTube se está por estrenar en una hora nuestro primer VideoLyrics del tema DíasGrises (track N° 5 de nuestro disco). ¡Ya podes ir y activar el recordatorio! - El sábado 19/12 a las 21 horas vamos a estar participando del <a href="https://www.instagram.com/conurbafestival/" target="_blank">conurbafestival</a> nuevamente presentando dos videos entre ellos uno exclusivo para esa fecha!'),
(2, 'Entrevista en rock.com.ar', 'Barrio Border: "Hacer el disco significó cerrar esa etapa de la adolescencia"', '"Rock a gusto" corresponde al primer material discográfico de la banda de zona sur que eligió grabar en deja Vu Estudios, de la mano del productor Anibal "Chiche" Bounarcorso... <a href="https://rock.com.ar/notas/barrio-border-hacer-el-disco-significo-cerrar-esa-etapa-de-la-adolescencia?fbclid=IwAR2JKQqkbseMhglmTlS8I53wu1AjHhTGVANEqFelh-tZqk0QSRZBbd9LU9s" target="_blank">Leer más</a>'),
(3, 'Prueba 2', 'Esta es una noticia que será modificada con el botón modificar', 'Ejemplo de modificación de novedad con node.js ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  `password` varchar(250) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Axel', 'c05fe5f783dca0662edf14edfc9fb65d'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
