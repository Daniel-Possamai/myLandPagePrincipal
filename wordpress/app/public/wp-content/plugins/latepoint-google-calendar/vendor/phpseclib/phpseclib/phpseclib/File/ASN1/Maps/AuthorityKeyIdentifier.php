<?php

/**
 * AuthorityKeyIdentifier
 *
 * PHP version 5
 *
 * @category  File
 * @package   ASN1
 * @author    Jim Wigginton <terrafrost@php.net>
 * @copyright 2016 Jim Wigginton
 * @license   http://www.opensource.org/licenses/mit-license.html  MIT License
 * @link      http://phpseclib.sourceforge.net
 */
namespace LatePoint\GoogleCalendarAddon\phpseclib3\File\ASN1\Maps;

use LatePoint\GoogleCalendarAddon\phpseclib3\File\ASN1;
/**
 * AuthorityKeyIdentifier
 *
 * @package ASN1
 * @author  Jim Wigginton <terrafrost@php.net>
 * @access  public
 */
abstract class AuthorityKeyIdentifier
{
    const MAP = ['type' => ASN1::TYPE_SEQUENCE, 'children' => ['keyIdentifier' => ['constant' => 0, 'optional' => \true, 'implicit' => \true] + KeyIdentifier::MAP, 'authorityCertIssuer' => ['constant' => 1, 'optional' => \true, 'implicit' => \true] + GeneralNames::MAP, 'authorityCertSerialNumber' => ['constant' => 2, 'optional' => \true, 'implicit' => \true] + CertificateSerialNumber::MAP]];
}