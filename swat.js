document.writeln('</script><style><!--BODY {font-family: "Arial";} #bg_link { right: 2px; top: 2px; position: absolute; z-index: 2; } #bg_lang { right: 70px; top: 5px; position: absolute; z-index: 2; font-size: 16px; font-family: "Arial"; } --></style>');

function WriteBr() {
  document.writeln('<br>');
}

function ShowScreenshot(pic) {
  document.writeln('<td width=70><a href=http://night.org/swat2/screenshots/war3-swat-ss' + pic +'.jpg target=_blank><img src=http://night.org/swat2/screenshots/war3-swat-ss' +pic+ 's.jpg alt="Click to Enlarge" title="Click to Enlarge" border=1 width=64 height=48></a></td>');
}

// TODO Provide STIT
// var info_STIT = '<a href=/forum/viewtopic.php?t=192 target=_blank><img src=forum/images/smiles/icon_idea2.gif border=0 alt=info title=info width=15 height=15></a>';
// var info_STIT_Ranks = '<a href=/forum/viewtopic.php?t=192#4392 target=_blank><img src=forum/images/smiles/icon_idea2.gif border=0 alt=info title=info width=15 height=15></a>';
// var info_STIT_Guns = '<a href=/forum/viewtopic.php?t=192#4395 target=_blank><img src=forum/images/smiles/icon_idea2.gif border=0 alt=info title=info width=15 height=15></a>';
// var info_STIT_Armor = '<a href=/forum/viewtopic.php?t=192#4399 target=_blank><img src=forum/images/smiles/icon_idea2.gif border=0 alt=info title=info width=15 height=15></a>';
// var info_STIT_Heroes = '<a href=/forum/viewtopic.php?t=192#5609 target=_blank><img src=forum/images/smiles/icon_idea2.gif border=0 alt=info title=info width=15 height=15></a>';
// var info_STIT_Traits = '<a href=/forum/viewtopic.php?t=192#14403 target=_blank><img src=forum/images/smiles/icon_idea2.gif border=0 alt=info title=info width=15 height=15></a>';
// var info_STIT_Specs = '<a href=/forum/viewtopic.php?t=192#20711 target=_blank><img src=forum/images/smiles/icon_idea2.gif border=0 alt=info title=info width=15 height=15></a>';
// var info_STIT_LAD = '<a href=/forum/viewtopic.php?t=192#4450 target=_blank><img src=forum/images/smiles/icon_idea2.gif border=0 alt=info title=info width=15 height=15></a>';
var info_STIT = '';
var info_STIT_Ranks = '';
var info_STIT_Guns = '';
var info_STIT_Armor = '';
var info_STIT_Heroes = '';
var info_STIT_Traits = '';
var info_STIT_Specs = '';
var info_STIT_LAD = '';
var info_URL_Armor = '';
var info_FORUM = '';

function info_URL_Guns(guntype) {
  return '<a href=readmerebornweapons.html#'+guntype+'><img src=info.gif border=0 alt=info title=info width=11 height=11></a>';
}


function InfoLink(label, url, gold, text) {
  var fcolor = 'FFFFFF';
  if (gold) { fcolor = 'FFE888'; }
  var s = '<a href="' + url + '" style="{color:'+fcolor+'" alt="info" title="info"><img src=infol.gif width=3 height=11 border=0>'+label+'<img src=infor.gif width=3 height=11 border=0></a>';
  if (text) { return s; }
  else { document.writeln(s); }
}

function InfoLinkG(label, url) {
  InfoLink(label, url, true);
}

function InfoLinkS(label, url, gold) {
  return InfoLink(label, url, gold, true);
}

function InfoAtkDef(label, white) {
  return InfoLink(label, 'readmerebornatkdef.html', !white, true);
}

//menu for all pages
function WriteTopMenu(base) {
  var rcpd = false;
  if (!base) { base = ''; }
  document.writeln('<center><font size=-1 color=ffe888>');
  document.writeln('<a href='+base+'index.html>HOME</a> | ');
  document.writeln('<a href='+base+'readmerebornobjectives.html>OBJS</a> | ');
  document.writeln('<a href='+base+'readmerebornclasses.html>CLASSES</a> | ');
  document.writeln('<a href='+base+'readmerebornweapons.html>GUNS</a> | ');
  document.writeln('<a href='+base+'readmerebornarmor.html>ARMOR</a> | ');
  document.writeln('<a href='+base+'readmereborntraits.html>TRAITS</a> | ');
  document.writeln('<a href='+base+'readmerebornspecs.html>SPECS</a> | ');
  document.writeln('<a href='+base+'readmereborntalents.html>TALENTS</a> | ');
  document.writeln('<a href='+base+'readmerebornmechs.html>MECHS</a> | ');
  document.writeln('<a href='+base+'readmerebornitems.html>ITEMS</a> | ');
  document.writeln('<a href='+base+'readmerebornrank.html>RANK</a> | ');
  document.writeln('<a href='+base+'readmerebornrenown.html>RENOWN</a> | ');
  // document.writeln('<a href=http://night.org/swat2/playerdb/>RCPD</a> | ');
  document.writeln('<a href='+base+'map.html>MAP</a>');
  document.writeln('</font></center>');
  document.writeln('');
}

function FormatTitle(title, small) {
  if (small) {
    return '<font color=ffcc00><b>'+title+'</b></font>';
  } else {
    return '<font size=+1 color=ffcc00><b>'+title+'</b></font>';
  }
}

function WriteTitle(title) {
  document.writeln(FormatTitle(title));
}

function WriteTitle2(title) {
  document.writeln(FormatTitle(title, true));
}

//color thing for older page styles
var rowHighlight = false;
function WriteOldHeader() {
  rowHighlight = true;
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 width=100%>');
}

function WriteOldRow(Name, Description) {
  var lite = '';
  if (rowHighlight) { lite = ' bgcolor=202020'; }
  rowHighlight = !rowHighlight;
  document.writeln('<tr'+lite+' valign=top><td width=5>&nbsp;</td><td align=right width=1%><b>'+Name+'</b></td><td width=10>&nbsp;</td><td>');
  document.writeln(Description);
  document.writeln('</td></tr>');
  document.writeln('<tr'+lite+' height=5><td></td><td></td><td></td><td></td></tr>');
}

function WriteOldRow2(Col1, Col2) {
  WriteOldRow('', '<table cellpadding=0 cellspacing=0 border=0 width=100%><tr valign=top><td width=49%>' + Col1 + '</td><td width=2%></td><td width=49%>' + Col2 + '</td></tr></table>');
}

function WriteOldRow4(Icon1, Col1, Icon2, Col2) {
  WriteOldRow('', '<table cellpadding=0 cellspacing=0 border=0 width=100%><tr valign=top><td align=right>'+Icon1+'</td><td width=4>&nbsp;</td><td width=49%>' + Col1 + '</td><td width=2%></td><td align=right>'+Icon2+'</td><td width=4>&nbsp;</td><td width=49%>' + Col2 + '</td></tr></table>');
}

function WriteOldFooter() {
  if (rowHighlight) {
    document.writeln('<tr bgcolor=202020 valign=top><td width=5></td><td align=right> </td><td width=10></td><td>');
    document.writeln('</td></tr>');
    document.writeln('<tr bgcolor=202020 height=5><td></td><td></td><td></td><td></td></tr>');
  }
  document.writeln('</table>');
}

//menu for class links
function WriteClassMenu() {
  document.writeln('<center><font size=-1 color=ffe888>');
  document.writeln('<a href=classinfo-sniper.htm>SNIPER</a> | ');
  document.writeln('<a href=classinfo-medic.htm>MEDIC</a> | ');
  document.writeln('<a href=classinfo-tact.htm>TACT</a> | ');
  document.writeln('<a href=classinfo-psy.htm>PSYCH</a> | ');
  document.writeln('<a href=classinfo-mav.htm>MAV</a> | ');
  document.writeln('<a href=classinfo-hvyord.htm>HVY&nbsp;ORD</a> | ');
  document.writeln('<a href=classinfo-demo.htm>DEMO</a> | ');
  document.writeln('<a href=classinfo-cyborg.htm>BORG</a> | ');
  document.writeln('<a href=classinfo-pyro.htm>PYRO</a> | ');
  document.writeln('<a href=classinfo-watchman.htm>WATCHMAN</a>');
  // document.writeln('<a href=classinfo-tech.htm>TECH</a> | ');
  // document.writeln('<a href=classinfo-umbclone.htm>UMB&nbsp;CLONE</a>');
  document.writeln('</font>&nbsp;</center>');
  document.writeln('');
}

//menu for mechanical units links
function WriteMechsMenu() {
  document.writeln('<center><font size=-1 color=ffe888>');
  document.writeln('<a href=unitinfo-lad.htm>ASSAULT&nbsp;DROID</a> | ');
  // document.writeln('<a href=unitinfo-tech.htm>CPU</a> | ');
  document.writeln('<a href=unitinfo-hvyord.htm>MINI&nbsp;DROID</a> | ');
  // document.writeln('<a href=unitinfo-mini2.htm>MINI&nbsp;DROID&nbsp;MKII</a> | ');
  document.writeln('<a href=unitinfo-mav.htm>ROBODOG</a>');
  // document.writeln('<a href=unitinfo-robopet.htm>ROBO&nbspPET</a> | ');
  // document.writeln('<a href=unitinfo-repairdroid.htm>REPAIR&nbsp;DROID</a>');
  document.writeln('</font>&nbsp;</center>');
  document.writeln('');
}

//menu for weapon links
function WriteWeaponMenu() {
  document.writeln('<center><font size=-1 color=ffe888>');
  document.writeln('<a href=#wassault>ASSAULT</a> | ');
  document.writeln('<a href=#wsniper>SNIPER</a> | ');
  document.writeln('<a href=#wchain>CHAINGUN</a> | ');
  document.writeln('<a href=#wrocket>ROCKET</a> | ');
  document.writeln('<a href=#wflame>FLAME</a> | ');
  document.writeln('<a href=#wrifle>LASER RIFLE</a> | ');
  document.writeln('<a href=#wbozar>BOZAR</a>');
  document.writeln('</font>&nbsp;</center>');
  document.writeln('');
}

//menu for items
function WriteItemsMenu() {
  document.writeln('<center><font size=-1 color=ffe888>');
  document.writeln('<a href=readmerebornitems.html>ITEMS</a> | ');
  document.writeln('<a href=readmerebornitems-engi.html>ENGINEERED&nbsp;ITEMS</a>');
  document.writeln('</font>&nbsp;</center>');
  document.writeln('');
}

//menu for armor atkdef type
function WriteArmorMenu() {
  document.writeln('<center><font size=-1 color=ffe888>');
  document.writeln('<a href=readmerebornatkdef.html>DAMAGE&nbsp;MULTIPLIERS</a>');
  document.writeln('</font>&nbsp;</center>');
  document.writeln('');
}

//menu for summoned unit links
function WriteSummonedMenu(Type) {
  document.writeln('<center><font size=-1 color=ffe888>');
  if(Type == 'MEDIC') {
    document.writeln('<a href=unitinfo-medic.htm>MENDING&nbsp;STATION</a>');
  }
  if(Type == 'TACT') {
    document.writeln('<a href=unitinfo-tact.htm#recruit>CADET</a> | ');
    document.writeln('<a href=unitinfo-tact.htm#woman>WOMAN</a>');
  }
  if(Type == 'MAV') {
    document.writeln('<a href=unitinfo-chrome.htm>CHROME&nbsp;RETRIEVER</a> | ');
    document.writeln('<a href=unitinfo-mecha.htm>MECHA&nbsp;MUTT</a> | ');
    document.writeln('<a href=unitinfo-kami.htm>KAMIKAZE&nbsp;CANINE</a>');
  }
  if(Type == 'HVYORD') {
    document.writeln('<a href=unitinfo-hvyord.htm>MINI&nbsp;DROID</a>');
  }
  // if(Type == 'TECH') {
  //   document.writeln('<a href=unitinfo-tech.htm>CRIME&nbsp;PREVENTION&nbsp;UNIT</a>');
  // }
  // if(Type == 'CLONE') {
  //   document.writeln('<a href=unitinfo-umbclone.htm>REPLICATED&nbsp;CLONE</a>');
  // }
  document.writeln('</font>&nbsp;</center>');
  document.writeln('');
}

//menu for maps' objectives links
function WriteMapsMenu() {
  document.writeln('<center><font size=-1 color=ffe888>');
  document.writeln('<a href=objectives-defense.htm>DEFENSE</a> | ');
  document.writeln('<a href=objectives-city.htm>CITY</a> | ');
  document.writeln('<a href=objectives-hive.htm>HIVE</a>');
  document.writeln('</font>&nbsp;</center>');
  document.writeln('');
}

//class main header (begin)
function WriteClassHeaderBegin(ClassName, ClassImage, ClassIcon, ClassRoles, ClassDescription, ClassFileType, ClassIconType) {
  var filetype = 'gif';
  var icontype = 'gif';
  if (ClassFileType != null) {
    filetype = ClassFileType;
  }
  if (ClassIconType != null) {
    icontype = ClassIconType;
  }
  document.writeln('<font size=+1 color=ffcc00><b>'+ClassName+'</b></font>');
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 width=100%>');
  document.writeln('<tr bgcolor=202020 valign=top><td width=4>&nbsp;</td><td align=right width=32><img src=pics/swat-'+ClassImage+'.'+filetype+' width=31 height=31><br>');
  document.writeln('<img src=pics/empty.gif width=1 height=1><br><img src="forum/images/smiles/class-'+ClassIcon+'.'+icontype+'"></td><td width=4>&nbsp;</td><td>');
  document.writeln('<font color=ffe888 face=Arial>'+ClassRoles+'</font><br>');
  document.writeln('<font face=Arial>');
  document.writeln(ClassDescription);
  document.writeln('<br>');
}

//returns the info link for an ability which creates a summoned unit
function SkillLinkDisplaySkill(SkillLinkClass, SkillLinkSkill) {
  if ((SkillLinkClass != null) && (SkillLinkClass != '') && (SkillLinkSkill != null) && (SkillLinkSkill != '')) {
    return ' <a href=classinfo-'+SkillLinkClass+'.htm#'+SkillLinkSkill+'><img src=info.gif border=0 alt=info title=info width=11 height=11></a>';
  } else {
    return '';
  }
}

//class (unit) main header (begin)
function WriteClassUnitHeaderBegin(ClassName, ClassImage, ClassAcquire, ClassDescription, SkillLinkClass, SkillLinkSkill, SkillFileType) {
  var filetype = 'gif';
  if (SkillFileType != null) {
    filetype = SkillFileType;
  }
  document.writeln('<font size=+1 color=ffcc00><a name='+ClassImage+'></a><b>'+ClassName+'</b></font>');
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 width=100%>');
  document.writeln('<tr bgcolor=202020 valign=top><td width=4>&nbsp;</td><td align=right width=32><img src=pics/ability-'+ClassImage+'.'+filetype+' width=32 height=32>');
  document.writeln('</td><td width=4>&nbsp;</td><td>');
  document.writeln('<font color=ffe888 face=Arial>'+ClassAcquire+SkillLinkDisplaySkill(SkillLinkClass, SkillLinkSkill)+'</font><br>');
  document.writeln('<font face=Arial>');
  document.writeln(ClassDescription);
  document.writeln('<br>');
}

function WriteWeaponHeaderBegin(ClassName, ClassAcquire, ClassDescription) {
  document.writeln('<font size=+1 color=ffcc00><a name='+ClassName+'></a><b>'+ClassName+'</b></font>');
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 width=100%>');
  document.writeln('<tr bgcolor=202020 valign=top><td width=4>&nbsp;</td>');
  document.writeln('</td><td width=4>&nbsp;</td><td>');
  document.writeln('<font color=ffe888 face=Arial>'+ClassAcquire+'</font><br>');
  document.writeln('<font face=Arial>');
  document.writeln(ClassDescription);
  document.writeln('<br>');
}

function WriteClassUnitTypeHeader(ClassName, ClassDescription) {
  document.writeln('<br><br><b>'+ClassName+'</b><br>');
  document.writeln(ClassDescription);
  document.writeln('<br>');
}

//class main header (end)
function WriteClassHeaderEnd(ClassImage, ClassFileType) {
  var filetype = 'jpg';
  if (ClassFileType != null) {
    filetype = ClassFileType;
  }
  document.writeln('</font></td><td>');
    // TODO: Maybe add these back
  // if ((ClassImage != null) && (ClassImage != '')) {
  //   document.writeln('<table cellpadding=1 cellspacing=4 border=0><tr><td bgcolor=ffe888><img src=pics/swat-'+ClassImage+'ss.'+filetype+' width=75 height=90 border=0></td></tr></table>');
  // }
  document.writeln('</td></tr><tr bgcolor=202020 height=5><td></td><td></td><td></td><td></td><td></td></tr>');
  document.writeln('</table>');
}

//statistics table data
function WriteCols(ColH, SizeH, Col1, Col2, Col3, Col4, Align, FontSize, Gold) {
  document.writeln('<tr bgcolor=202020><td align=right width='+SizeH+'><b>'+ColH+'</b></td><td align=left>');
  var Cols = 4;
  var FontBeg = '<font face=Arial size=' + FontSize;
  if (Gold) { FontBeg = FontBeg + ' color=ffe888'; }
  if (Col4 == '') { Cols = Cols - 1; }
  if (Col3 == '') { Cols = Cols - 1; }
  if (Col2 == '') { Cols = Cols - 1; }
  var ColSize = 100/Cols + '%'
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 bgcolor=202020 width=100%><tr align=' + Align + '>');
  if (Col1 != '') { document.writeln('<td width=' + ColSize + '>' + FontBeg + '>' + Col1 + '</font></td>'); }
  if (Col2 != '') { document.writeln('<td width=' + ColSize + '>' + FontBeg + '>' + Col2 + '</font></td>'); }
  if (Col3 != '') { document.writeln('<td width=' + ColSize + '>' + FontBeg + '>' + Col3 + '</font></td>'); }
  if (Col4 != '') { document.writeln('<td width=' + ColSize + '>' + FontBeg + '>' + Col4 + '</font></td>'); }
  document.writeln('</tr></table></td></tr>');
}

//class skill links
function WriteSkillLinks(N1, A1, N2, A2, N3, A3, N4, A4, N5, A5, N6, A6, N7, A7, N8, A8) {
  document.writeln('<br><font size=-1 color=ffe888>');
  if ((A1 != '') && (A1 != null)) { document.writeln('<a href=#'+A1+'>'+N1+'</a>'); }
  if ((A2 != '') && (A2 != null)) { document.writeln(' |&nbsp;<a href=#'+A2+'>'+N2+'</a>'); }
  if ((A3 != '') && (A3 != null)) { document.writeln(' |&nbsp;<a href=#'+A3+'>'+N3+'</a>'); }
  if ((A4 != '') && (A4 != null)) { document.writeln(' |&nbsp;<a href=#'+A4+'>'+N4+'</a>'); }
  if ((A5 != '') && (A5 != null)) { document.writeln(' |&nbsp;<a href=#'+A5+'>'+N5+'</a>'); }
  if ((A6 != '') && (A6 != null)) { document.writeln(' |&nbsp;<a href=#'+A6+'>'+N6+'</a>'); }
  if ((A7 != '') && (A7 != null)) { document.writeln(' |&nbsp;<a href=#'+A7+'>'+N7+'</a>'); }
  if ((A8 != '') && (A8 != null)) { document.writeln(' |&nbsp;<a href=#'+A8+'>'+N8+'</a>'); }
  document.writeln('</font>');
}

//class summoneds links
function WriteSummonedsLinks(ClassLink, N1, A1, N2, A2, N3, A3, N4, A4, N5, A5) {
  document.writeln('<br><font size=-1 color=ffe888><i>');
  if ((A1 != '') && (A1 != null)) { document.writeln('<a href=unitinfo-'+ClassLink+'.htm#'+A1+'>'+N1+'</a>'); }
  if ((A2 != '') && (A2 != null)) { document.writeln(' | <a href=unitinfo-'+ClassLink+'.htm#'+A2+'>'+N2+'</a>'); }
  if ((A3 != '') && (A3 != null)) { document.writeln(' | <a href=unitinfo-'+ClassLink+'.htm#'+A3+'>'+N3+'</a>'); }
  if ((A4 != '') && (A4 != null)) { document.writeln(' | <a href=unitinfo-'+ClassLink+'.htm#'+A4+'>'+N4+'</a>'); }
  if ((A5 != '') && (A5 != null)) { document.writeln(' | <a href=unitinfo-'+ClassLink+'.htm#'+A5+'>'+N5+'</a>'); }
  document.writeln('</i></font>');
}

//class summoneds links dog
function WriteSummonedsLinksDog(N1, A1, N2, A2, N3, A3, N4, A4, N5, A5) {
  document.writeln('<br><font size=-1 color=ffe888><i>');
  if ((A1 != '') && (A1 != null)) { document.writeln('<a href=unitinfo-'+A1+'.htm>'+N1+'</a>'); }
  if ((A2 != '') && (A2 != null)) { document.writeln(' | <a href=unitinfo-'+A2+'.htm>'+N2+'</a>'); }
  if ((A3 != '') && (A3 != null)) { document.writeln(' | <a href=unitinfo-'+A3+'.htm>'+N3+'</a>'); }
  document.writeln('</i></font>');
}

//class summoneds links dog
function WriteSummonedsLinksDogPage(N1, A1, N2, A2, N3, A3, N4, A4, N5, A5, DogPage) {
  document.writeln('<br><font color=ffcc00>Select Dog:</font>');
  document.writeln('<br><font size=-1 color=ffe888><i>');
  if ((A1 != '') && (A1 != null)) { document.writeln('<a href=unitinfo-'+A1+'.htm>'+N1+'</a>'); }
  if ((A2 != '') && (A2 != null)) { document.writeln(' | <a href=unitinfo-'+A2+'.htm>'+N2+'</a>'); }
  if ((A3 != '') && (A3 != null)) { document.writeln(' | <a href=unitinfo-'+A3+'.htm>'+N3+'</a>'); }
  document.writeln('</i></font>');
}

//class bonus info
function WriteBonus(BonusName, BonusDescription) {
  document.writeln('<tr bgcolor=202020 valign=top><td align=right width=90><b>'+BonusName+'</b></td><td align=left><font face=Arial>'+BonusDescription+'</font></td></tr>');
}

//returns the skill key formatted for the screen
function HotkeyDisplay(SkillKey) {
  if ((SkillKey == null) || (SkillKey == '')) {
    return '';
  } else if (SkillKey == '+') {
    return ' (<font color=ffe888>toggle</font>)';
  } else if (SkillKey == '.') {
    return ' (<font color=ffe888>passive</font>)';
  } else {
    return ' (<font color=ffe888 size=-1><b>'+SkillKey+'</b></font>)';
  }
}

//returns the info link for a summoned unit
function SkillLinkDisplayUnit(SkillLinkClass, SkillLinkUnit) {
  if ((SkillLinkClass != null) && (SkillLinkClass != '') && (SkillLinkUnit != null) && (SkillLinkUnit != '')) {
    return ' <a href=unitinfo-'+SkillLinkClass+'.htm#'+SkillLinkUnit+'><img src=info.gif border=0 alt=info title=info width=11 height=11></a>';
  } else {
    return '';
  }
}

//skill header
function WriteSkill(SkillName, SkillCode, SkillKey, SkillDescription, SkillMore, SkillLinkClass, SkillLinkUnit, SkillFileType,) {
  var filetype = 'gif';
  if (SkillFileType != null) {
    filetype = SkillFileType;
  }
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 bgcolor=202020 width=100%><tr valign=top>');
  document.writeln('<td width=4>&nbsp;</td>');

  document.writeln('<td align=right width=32>');
  document.writeln('<div style="position:relative;top:0;left:0;">');
  document.writeln('<img style="position:relative;top:0;left:0;" src=pics/ability-'+SkillCode+'.'+filetype+' height=32 width=32>');
  if(SkillKey == '.') {
      document.writeln('<img style="position:absolute;top:0px;left:0px;" src=pics/overlay-passive.gif height=32 width=32>');
  } else {
      document.writeln('<img style="position:absolute;top:0px;left:0px;" src=pics/overlay-active.gif height=32 width=32>');
  }
  document.writeln('</div>');
  document.writeln('</td>');

  document.writeln('<td width=4>&nbsp;</td>');
  document.writeln('<td align=left><font face=Arial><a name='+SkillCode+'></a><b>'+SkillName+'</b>'+HotkeyDisplay(SkillKey)+SkillLinkDisplayUnit(SkillLinkClass, SkillLinkUnit)+'<br>');
  document.writeln(SkillDescription);
  document.writeln('</font></td></tr>');
  document.writeln('<tr height=5><td></td></tr></table>');
}

//Place to add more text for more complicated abilities
function WriteSkillMore(text) {
  document.writeln('</table></td>');
  if (NoSecondBatch == true) {
    document.writeln('<td align=right width=49%>&nbsp;</td>');
  }
  document.writeln('</tr></table>');
}

//skill table begin
function WriteSkillBegin(percent) {
  if (percent == null) { percent = '49%'; }
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 width=100%><tr valign=top>');
  document.writeln('<td align=left width='+percent+'><table cellspacing=2 cellpadding=4 border=0 width=100%>');
}

//skill table second batch
function WriteSkillBegin2(percent) {
  if (percent == null) { percent = '49%'; }
  document.writeln('</table></td>');
  document.writeln('<td align=right width='+percent+'><table cellspacing=2 cellpadding=4 border=0 width=100%>');
}

//skill table end
function WriteSkillEnd(NoSecondBatch) {
  document.writeln('</table></td>');
  if (NoSecondBatch == true) {
    document.writeln('<td align=right width=49%>&nbsp;</td>');
  }
  document.writeln('</tr></table>');
}

//special function for formatting rank names

function RankName(Level, Icon, Desc) {
  return '<table cellpadding=0 cellspacing=0 border=0 align=left><tr align=left><td width=16><img src="pics/icon_rank'+Icon+'.gif" alt="Rank '+Level+'" title="Rank '+Level+'"></td><td><font size=-1 face=Arial color=ffe888>'+Desc+'</font></td></tr></table>';
}

function MedalName(Icon, Desc) {
  return '<table cellpadding=0 cellspacing=0 border=0 align=left><tr align=left><td width=19><img src="/forum/images/smiles/medal-'+Icon+'.gif" alt="'+Icon+'" title="'+Icon+'"></td><td><font size=-1 face=Arial color=ffe888>'+Desc+'</font></td></tr></table>';
}

//skill table header
function WriteHeader(Level, Data1, Data2, Data3, Data4, Data5, Data6, Data7, Data8, Data9) {
  var firstcolw = ' width=90';
  document.writeln('<tr align=center valign=top bgcolor=202020>');
  if ((Level != '') && (Level != null)) { document.writeln('<td'+firstcolw+'><b>' + Level + '</b></td>'); firstcolw = '';}
  if ((Data1 != '') && (Data1 != null)) { document.writeln('<td'+firstcolw+'><b>' + Data1 + '</b></td>'); }
  if ((Data2 != '') && (Data2 != null)) { document.writeln('<td><b>' + Data2 + '</b></td>'); }
  if ((Data3 != '') && (Data3 != null)) { document.writeln('<td><b>' + Data3 + '</b></td>'); }
  if ((Data4 != '') && (Data4 != null)) { document.writeln('<td><b>' + Data4 + '</b></td>'); }
  if ((Data5 != '') && (Data5 != null)) { document.writeln('<td><b>' + Data5 + '</b></td>'); }
  if ((Data6 != '') && (Data6 != null)) { document.writeln('<td><b>' + Data6 + '</b></td>'); }
  if ((Data7 != '') && (Data7 != null)) { document.writeln('<td><b>' + Data7 + '</b></td>'); }
  if ((Data8 != '') && (Data8 != null)) { document.writeln('<td><b>' + Data8 + '</b></td>'); }
  if ((Data9 != '') && (Data9 != null)) { document.writeln('<td><b>' + Data9 + '</b></td>'); }
  document.writeln('</tr>');
}

function WriteGunHeader(Level, Data1, Data2, Data3, Data4, Data5, Data6, Data7, Data8, Data9) {
  document.writeln('<tr align=center valign=top bgcolor=202020>');
  if ((Level != '') && (Level != null)) { document.writeln('<td><b>' + Level + '</b></td>'); }
  if ((Data1 != '') && (Data1 != null)) { document.writeln('<td width=90><b>' + Data1 + '</b></td>'); }
  if ((Data2 != '') && (Data2 != null)) { document.writeln('<td width="14%"><b>' + Data2 + '</b></td>'); }
  if ((Data3 != '') && (Data3 != null)) { document.writeln('<td width="12%"><b>' + Data3 + '</b></td>'); }
  if ((Data4 != '') && (Data4 != null)) { document.writeln('<td width="10%"><b>' + Data4 + '</b></td>'); }
  if ((Data5 != '') && (Data5 != null)) { document.writeln('<td width="10%"><b>' + Data5 + '</b></td>'); }
  if ((Data6 != '') && (Data6 != null)) { document.writeln('<td width="10%"><b>' + Data6 + '</b></td>'); }
  if ((Data7 != '') && (Data7 != null)) { document.writeln('<td><b>' + Data7 + '</b></td>'); }
  if ((Data8 != '') && (Data8 != null)) { document.writeln('<td><b>' + Data8 + '</b></td>'); }
  if ((Data9 != '') && (Data9 != null)) { document.writeln('<td><b>' + Data9 + '</b></td>'); }
  document.writeln('</tr>');
}

//skill table data
function WriteData(Level, Data1, Data2, Data3, Data4, Data5, Data6, Data7, Data8, Data9) {
  document.writeln('<tr align=center valign=top bgcolor=202020>');
  if ((Level != '') && (Level != null)) { document.writeln('<td width=90><font size=-1>' + Level + '</font></td>'); }
  if ((Data1 != '') && (Data1 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data1 + '</font></td>'); }
  if ((Data2 != '') && (Data2 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data2 + '</font></td>'); }
  if ((Data3 != '') && (Data3 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data3 + '</font></td>'); }
  if ((Data4 != '') && (Data4 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data4 + '</font></td>'); }
  if ((Data5 != '') && (Data5 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data5 + '</font></td>'); }
  if ((Data6 != '') && (Data6 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data6 + '</font></td>'); }
  if ((Data7 != '') && (Data7 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data7 + '</font></td>'); }
  if ((Data8 != '') && (Data8 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data8 + '</font></td>'); }
  if ((Data9 != '') && (Data9 != null)) { document.writeln('<td><font size=-1 face=Arial color=ffe888>' + Data9 + '</font></td>'); }
  document.writeln('</tr>');
}

function WriteStatsAttribs(VitB, VitL, AgiB, AgiL, IntB, IntL, health, regen, emax, elvl, epslvl) {
  if (health == null) { health = '500'; }
  if (regen == null) { regen = '6'; }
  if (emax == null) { emax = '1000'; }
  if (elvl == null) { elvl = '--'; }
  if (epslvl == null) { epslvl = '--'; }
  WriteCols('&nbsp;', 90,'&nbsp;&nbsp;&nbsp;&nbsp;Base','','&nbsp;Levelup','', 'right', '-1', false);
  WriteCols('Health', 90,health,'','--','','right', '+0', true);
  WriteCols('Energy', 90,emax,'',elvl,'','right', '+0', true);
  WriteCols('Regen.', 90,regen+'&nbsp;eps','',epslvl,'','right', '+0', true);
  WriteCols('Vitality', 90,VitB,'','+'+VitL,'','right', '+0', true);
  WriteCols('Agility', 90,AgiB,'','+'+AgiL,'','right', '+0', true);
  WriteCols('Intelligence',90,IntB,'','+'+IntL,'','right', '+0', true);
}

function WriteStatsNoAttribs(health, regen, emax, elvl, epslvl) {
    if (health == null) { health = '500'; }
    if (regen == null) { regen = '6'; }
    if (emax == null) { emax = '1000'; }
    if (elvl == null) { elvl = '--'; }
    if (epslvl == null) { epslvl = '--'; }
    WriteCols('&nbsp;', 90,'&nbsp;&nbsp;&nbsp;&nbsp;Base','','&nbsp;Levelup','', 'right', '-1', false);
    WriteCols('Health', 90,health,'','--','','right', '+0', true);
    WriteCols('Energy', 90,emax,'',elvl,'','right', '+0', true);
    WriteCols('Regen.', 90,regen+'&nbsp;eps','',epslvl,'','right', '+0', true);
}

function WriteStatsWeaponEx(Weapon, Type, Cooldown, Damage, Ammo, Range, Splash, Levelup) {
  if (Levelup == null) { Levelup = 'Ammo'; }
  WriteCols('Weapon',80,Weapon,'','','', 'left', '+0', false);
  WriteCols('Type',80,Type,'','','', 'left', '+0', true);
  WriteCols('Cooldown',80,Cooldown,'','','', 'left', '+0', true);
  WriteCols('Damage',80,Damage,'','','', 'left', '+0', true);
  WriteCols(Levelup,80,Ammo,'','','', 'left', '+0', true);
  WriteCols('Range',80,Range,'','','', 'left', '+0', true);
  WriteCols('Splash',80,Splash,'','','', 'left', '+0', true);
}

function WriteStatsWeapon(Weapon, Mav, Variant) {
  if (Mav) {
    if (Weapon == 0) {
      WriteStatsWeaponEx('Assault&nbsp;Rifle&nbsp;MkII' + info_URL_Guns('wassault'),InfoAtkDef('Bullets'),'1.69','90-124','+1-18','900','24/96/155');
    } else if (Weapon == 1) {
     WriteStatsWeaponEx('Sniper&nbsp;Rifle&nbsp;MkII' + info_URL_Guns('wsniper'),InfoAtkDef('Bullets'),'2.14','200-300','+5-25','1200','--');
    } else if (Weapon == 2) {
      WriteStatsWeaponEx('Chaingun&nbsp;MkII' + info_URL_Guns('wchain'),InfoAtkDef('Bullets'),'0.56','45-52','+1-8','625','24/96/120');
    } else if (Weapon == 3) {
      WriteStatsWeaponEx('Rocket&nbsp;Launcher&nbsp;MkII' + info_URL_Guns('wrocket'),InfoAtkDef('Rockets'),'2.82','94-157','+1-22','1500','96/192/264');
    } else if (Weapon == 4) {
      WriteStatsWeaponEx('Flamethrower&nbsp;MkII' + info_URL_Guns('wflame'),InfoAtkDef('Flame'),'0.23','9-11','+1-2','700','144');
    }
  } else {
    if (Weapon == 0) {
      if (Variant) {
        WriteStatsWeaponEx('Urban&nbsp;Assault&nbsp;Rifle' + info_URL_Guns('wassault'),InfoAtkDef('Bullets'),'1.86','99-156','+1-20','900','24/96/155');
      } else {
        WriteStatsWeaponEx('Assault&nbsp;Rifle' + info_URL_Guns('wassault'),InfoAtkDef('Bullets'),'1.86','90-124','+1-18','900','24/96/155');
      }
    } else if (Weapon == 1) {
     WriteStatsWeaponEx('Sniper&nbsp;Rifle' + info_URL_Guns('wsniper'),InfoAtkDef('Bullets'),'2.57','200-300','+5-25','1200','--');
    } else if (Weapon == 2) {
      if (Variant) {
        WriteStatsWeaponEx('Vindicator' + info_URL_Guns('wchain'),InfoAtkDef('Bullets'),'0.76','55-64','+1-10','550','24/96/120');
      } else {
        WriteStatsWeaponEx('Chaingun' + info_URL_Guns('wchain'),InfoAtkDef('Bullets'),'0.62','45-52','+1-8','550','24/96/120');
      }
    } else if (Weapon == 3) {
      WriteStatsWeaponEx('Rocket&nbsp;Launcher' + info_URL_Guns('wrocket'),InfoAtkDef('Rockets'),'3.10','94-157','+1-22','1500','96/192/264');
    } else if (Weapon == 4) {
      WriteStatsWeaponEx('Flamethrower' + info_URL_Guns('wflame'),InfoAtkDef('Flame'),'0.26','9-11','+1-2','700','144');
    } else if (Weapon == 5) {
      WriteStatsWeaponEx('Teeth',InfoAtkDef('Melee'),'2.48','151-199','+3-3','99','--','Levelup');
    } else if (Weapon == 6) { //cadet rifle
      WriteStatsWeaponEx('Assault&nbsp;Rifle' + info_URL_Guns('wassault'),InfoAtkDef('Bullets'),'1.86','90-124','--','900','24/96/155');
    } else if (Weapon == 7) { //droid chain
      WriteStatsWeaponEx('Chaingun' + info_URL_Guns('wchain'),InfoAtkDef('Bullets'),'0.62','30-34','--','550','24/96/120');
    } else if (Weapon == 8) { //bozar
      WriteStatsWeaponEx('Bozar' + info_URL_Guns('wbozar'),InfoAtkDef('Bullets'),'1.86','200-300','+5-25','1200','24/60/105');
    } else if (Weapon == 9) { //gatling laser
      WriteStatsWeaponEx('Gatling&nbsp;Laser' + info_URL_Guns('gatling'),InfoAtkDef('Laser'),'0.62','70-70','+5-5','700','--');
    } else if (Weapon == 10) {
      WriteStatsWeaponEx('Power&nbsp;Fist',InfoAtkDef('Melee'),'3.10','604-796','+26-74','99','--');
    } else if (Weapon == 11) {
	  WriteStatsWeaponEx('Blast&nbsp;Gloves' + info_URL_Guns('wbgloves'),InfoAtkDef('Melee'),'0.83','150-195','+1-16','100','40/80/110');
	} else if (Weapon == 12) {
	  WriteStatsWeaponEx('Pistols' + info_URL_Guns('wpistol'),InfoAtkDef('Bullets'),'0.93','48-74','+1-14','625','--');
    } else if (Weapon == 13) {
	  WriteStatsWeaponEx('Blast&nbsp;Gloves' + info_URL_Guns('wbgloves'),InfoAtkDef('Melee'),'0.83','150-195','--','100','40/80/110');
	} else if (Weapon == 14) {
	  WriteStatsWeaponEx('Pistols' + info_URL_Guns('wpistol'),InfoAtkDef('Bullets'),'0.93','48-74','--','625','--');
	}
  }
}

function WriteStatsArmor(type) {
  var headerAdv = 'Advanced';
  if (type == 'cpu') {
    headerAdv = '';
  }
  if ((type == null) || (type == 'advanced')) { WriteCols('Defense',90,InfoAtkDef('Power&nbsp;Armor', true)+info_URL_Armor,'','','', 'left', '+0', false); }
  else if (type == 'mini2') { WriteCols('Defense',90,InfoAtkDef('Power&nbsp;Armor MkII', true),'','','', 'left', '+0', false); }
  else { WriteCols('Defense',90,InfoAtkDef('Power&nbsp;Armor', true),'','','', 'left', '+0', false); }
  WriteCols('&nbsp;',90,'Light','Medium','Heavy',headerAdv, 'right', '-1', false);
  if (type == 'advanced') {
    WriteCols('Move&nbsp;Spd.',90,'--','--','--','230', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'--','--','--','2.8', 'right', '+0', true);
    WriteCols('Armor',90,'--','--','--','1', 'right', '+0', true);
  } else if (type == 'chrome') {
    WriteCols('Move&nbsp;Spd.',90,'290','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'0.0','--','--','--', 'right', '+0', true);
    WriteCols('Armor',90,'60','--','--','--', 'right', '+0', true);
  } else if (type == 'mecha') {
    WriteCols('Move&nbsp;Spd.',90,'--','--','--','200', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'--','--','--','0.0', 'right', '+0', true);
    WriteCols('Armor',90,'--','--','--','1', 'right', '+0', true);
  } else if (type == 'kami') {
    WriteCols('Move&nbsp;Spd.',90,'270','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'0.0','--','--','--', 'right', '+0', true);
    WriteCols('Armor',90,'0','--','--','--', 'right', '+0', true);
  } else if (type == 'dog') {
    WriteCols('Move&nbsp;Spd.',90,'290, 270','--','--','200', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'0.0','--','--','0.0', 'right', '+0', true);
    WriteCols('Armor',90,'60, 0','--','--','1', 'right', '+0', true);
  } else if (type == 'cadet') {
    WriteCols('Move&nbsp;Spd.',90,'268','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'+50%','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'6 s','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'0.0','--','--','--', 'right', '+0', true);
    WriteCols('Armor',90,'0','--','--','--', 'right', '+0', true);
  } else if (type == 'minidroid') {
    WriteCols('Move&nbsp;Spd.',90,'--','hero','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'--','0.0','--','--', 'right', '+0', true);
    WriteCols('Armor',90,'--','0','--','--', 'right', '+0', true);
  } else if (type == 'mini2') {
    WriteCols('Move&nbsp;Spd.',90,'--','variable','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'--','0.0','--','--', 'right', '+0', true);
    WriteCols('Armor',90,'--','1/3/7','--','--', 'right', '+0', true);
  } else if (type == 'lad') {
    WriteCols('Move&nbsp;Spd.',90,'--','--','--','270', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','--', 'right', '+0', true);
    WriteCols('Absorption',90,'--','--','--','0.2', 'right', '+0', true);
    WriteCols('Armor',90,'--','--','--','1', 'right', '+0', true);
  } else if (type == 'cpu') {
    WriteCols('Move&nbsp;Spd.',90,'203+','201+','200+','', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'--','--','--','', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'--','--','--','', 'right', '+0', true);
    WriteCols('Absorption',90,'0.0','0.0','0.0','', 'right', '+0', true);
    WriteCols('Armor',90,'0','0','0','', 'right', '+0', true);
  } else {
    WriteCols('Move&nbsp;Spd.',90,'290','250','220','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Spd.',90,'+50%','+60%','+80%','--', 'right', '+0', true);
    WriteCols('Sprint&nbsp;Cool.',90,'20&nbsp;s','30&nbsp;s','150&nbsp;s','--', 'right', '+0', true);
    WriteCols('Absorption',90,'1.4','2.1','2.8','--', 'right', '+0', true);
    WriteCols('Armor',90,'0','0','0','--', 'right', '+0', true);
  }
}

function ArmorName(Type) {
  if (Type == null) { return 'each type of'; }
  else if (Type == 4) { return 'Heavy (Shield Capacitor or Titan Vest)'; }
  else if (Type == 5) { return 'Heavy (Shield Capacitor and Titan Vest)'; }
  else if (Type == 0) { return 'Light'; }
  else if (Type == 1) { return 'Medium'; }
  else if (Type == 2) { return 'Heavy'; }
  else if (Type == 6) { return 'Cadet'; }
  else { return 'Advanced'; }
}

function NanitesName(Type, Differentiate) {
  if (Differentiate == true) {
    if (Type == 4) { return 'Large+ '; }
    else if (Type == 5) { return 'Large++ '; }
    else if (Type == 0) { return 'Compact '; }
    else if (Type == 1) { return 'Standard '; }
    else { return 'Large '; }
  } else { return ''; }
}

function WriteSkillNanites(Type, Differentiate, unit) {
  var injuries = '';
  var nandif = '';
  if (unit == 'droid') { nandif = 'The Assault Droid\'s nanites are increased by 1 for Nightmare and by 3 for Extinction difficulties.'; }
  if (unit == null) { unit = 'hero'; injuries = ' and help prevent injuries'; }
  if (Differentiate == true) { document.writeln('<a name='+NanitesName(Type, Differentiate)+'>'); }
  WriteSkill(NanitesName(Type, Differentiate)+'Nanites', 'nanites', '+', 'The micro-fusion pack powering the '+unit+'\'s systems is used to create nanites which absorb nearly all incoming damage'+injuries+'. '+nandif+'</font><br><font size=-1>The level progression below reflects a unit in '+ ArmorName(Type) +' power armor.');
  if (Differentiate == true) { document.writeln('</a>'); }
  WriteSkillBegin();
  WriteHeader('Skill Level','Absorption','Efficiency');
  if (Type == 4) {
    WriteData('1', '91%', '1.000');
    WriteData('2', '91%', '0.848');
    WriteData('3', '91%', '0.733');
    WriteData('4', '91%', '0.641');
    WriteData('5', '91%', '0.564');
    WriteData('6', '91%', '0.499');
    WriteData('7', '91%', '0.442');
    WriteData('8', '92%', '0.392');
    WriteData('9', '92%', '0.348');
    WriteData('10','92%', '0.309');
  } else if (Type == 5) {
    WriteData('1', '91%', '1.000');
    WriteData('2', '91%', '0.795');
    WriteData('3', '91%', '0.656');
    WriteData('4', '91%', '0.554');
    WriteData('5', '91%', '0.473');
    WriteData('6', '91%', '0.409');
    WriteData('7', '92%', '0.355');
    WriteData('8', '92%', '0.309');
    WriteData('9', '92%', '0.270');
    WriteData('10','92%', '0.237');
  } else if (Type == 0) {
    WriteData('1', '90%', '4.000');
    WriteData('2', '90%', '2.200');
    WriteData('3', '91%', '1.524');
    WriteData('4', '91%', '1.168');
    WriteData('5', '91%', '0.950');
    WriteData('6', '91%', '0.803');
    WriteData('7', '91%', '0.699');
    WriteData('8', '91%', '0.621');
    WriteData('9', '91%', '0.561');
    WriteData('10','91%', '0.514');
  } else if (Type == 1) {  0.476
    WriteData('1', '90%', '2.500');
    WriteData('2', '91%', '1.641');
    WriteData('3', '91%', '1.222');
    WriteData('4', '91%', '0.973');
    WriteData('5', '90%', '0.808');
    WriteData('6', '91%', '0.691');
    WriteData('7', '91%', '0.604');
    WriteData('8', '91%', '0.536');
    WriteData('9', '91%', '0.482');
    WriteData('10','91%', '0.438');
  } else {
    WriteData('1', '91%', '1.000');
    WriteData('2', '91%', '0.896');
    WriteData('3', '91%', '0.809');
    WriteData('4', '91%', '0.734');
    WriteData('5', '91%', '0.666');
    WriteData('6', '91%', '0.605');
    WriteData('7', '91%', '0.550');
    WriteData('8', '91%', '0.498');
    WriteData('9', '91%', '0.451');
    WriteData('10','91%', '0.408');
    if (unit == 'droid') {
    WriteData('11','92%', '0.368');
    }
  }
  WriteSkillBegin2();
  WriteHeader('Skill Level','Absorption','Efficiency');
  if (Type == 4) {
    WriteData('11', '93%', '0.274');
    WriteData('12', '93%', '0.244');
    WriteData('13', '93%', '0.217');
    WriteData('14', '94%', '0.193');
    WriteData('15', '94%', '0.172');
    WriteData('16', '94%', '0.153');
    WriteData('17', '95%', '0.137');
    WriteData('18', '95%', '0.123');
    WriteData('19', '95%', '0.110');
    if (unit == 'unit') {
    WriteData('20', '95%', '0.099');
    }
  } else if (Type == 5) {
    WriteData('11', '92%', '0.208');
    WriteData('12', '92%', '0.183');
    WriteData('13', '93%', '0.161');
    WriteData('14', '93%', '0.142');
    WriteData('15', '93%', '0.126');
    WriteData('16', '94%', '0.112');
    WriteData('17', '94%', '0.099');
    WriteData('18', '94%', '0.088');
    WriteData('19', '95%', '0.079');
    if (unit == 'unit') {
    WriteData('20', '95%', '0.071');
    }
  } else if (Type == 0) {
    WriteData('11', '91%', '0.476');
    WriteData('12', '91%', '0.446');
    WriteData('13', '91%', '0.421');
    WriteData('14', '92%', '0.400');
    WriteData('15', '92%', '0.385');
    WriteData('16', '92%', '0.372');
    WriteData('17', '92%', '0.362');
    WriteData('18', '92%', '0.355');
    WriteData('19', '92%', '0.350');
    if (unit == 'unit') {
    WriteData('20', '92%', '0.345');
    }
  } else if (Type == 1) {
    WriteData('11', '91%', '0.400');
    WriteData('12', '92%', '0.370');
    WriteData('13', '92%', '0.344');
    WriteData('14', '92%', '0.320');
    WriteData('15', '92%', '0.300');
    WriteData('16', '92%', '0.283');
    WriteData('17', '92%', '0.267');
    WriteData('18', '92%', '0.253');
    WriteData('19', '93%', '0.240');
    if (unit == 'unit') {
    WriteData('20', '93%', '0.229');
    }
  } else {
    if (unit != 'droid') {
    WriteData('11', '92%', '0.368');
    }
    WriteData('12', '92%', '0.332');
    WriteData('13', '92%', '0.299');
    WriteData('14', '92%', '0.269');
    WriteData('15', '92%', '0.242');
    WriteData('16', '93%', '0.218');
    WriteData('17', '93%', '0.197');
    WriteData('18', '93%', '0.177');
    WriteData('19', '94%', '0.160');
    if (unit == 'unit') {
    WriteData('20', '94%', '0.145');
    }
    if (unit == 'droid') {
    WriteData('20', '94%', '0.145');
    WriteData('21', '94%', '0.130');
    WriteData('22', '94%', '0.119');
    }
  }
  WriteSkillEnd();
}

function WriteSkillRefRif(showall) {
  WriteSkill('Refined&nbsp;Rifle', 'refrif', '.', 'Increases the damage and range of the assault rifle.');
  WriteSkillBegin();
  WriteHeader('Skill Level', 'Damage', 'Range');
  WriteData('1', '+6', '+15');
  WriteData('2', '+12', '+30');
  WriteData('3', '+18', '+45');
  WriteData('4', '+24', '+60');
  WriteData('5', '+30', '+75');
  WriteData('6', '+36', '+90');
  WriteData('7', '+42', '+105');
  WriteData('8', '+48', '+120');
  WriteSkillBegin2();
  WriteHeader('Skill Level', 'Damage', 'Range');
  WriteData('9', '+54', '+135');
  WriteData('10', '+60', '+150');
  WriteData('11', '+66', '+165');
  WriteData('12', '+72', '+180');
  WriteData('13', '+78', '+195');
  WriteData('14', '+84', '+210');
  WriteData('15', '+90', '+225');
  WriteData('16', '+96', '+240');
  WriteData('17', '+102', '+255');
  WriteSkillEnd();
}

function WriteSkillPlasRnd(showall) {
  WriteSkill('Plasma&nbsp;Rounds', 'plasrnd', '+', 'This system can be activated to fuse destructive nanites with each round fired. Upon impact, these nanites tear through the target, briefly hindering its movement.');
  WriteSkillBegin();
  WriteHeader('Skill Level', 'Dmg.', 'Atk.&nbsp;Spd.', 'Slow', 'Duration', 'Energy', 'Cool.');
  WriteData('1', '+4', '-1%', '20%','0.15 s','1','--');
  WriteData('2', '+9', '-2%',  '25%','0.25 s','2','0.13 s');
  WriteData('3', '+10', '-3%', '26%','0.25 s','2','0.13 s');
  WriteData('4', '+11', '-3%', '27%','0.25 s','2','0.13 s');
  WriteData('5', '+12', '-4%', '28%','0.25 s','2','0.13 s');
  WriteData('6', '+13', '-4%', '29%','0.25 s','2','0.13 s');
  WriteData('7', '+20', '-6%', '35%','0.45 s','3','0.23 s');
  WriteData('8', '+22', '-7%', '36%','0.45 s','3','0.23 s');
  WriteSkillBegin2();
  WriteHeader('Skill Level', 'Dmg.', 'Atk.&nbsp;Spd.', 'Slow', 'Duration', 'Energy', 'Cool.');
  WriteData('9',  '+24', '-8%', '37%','0.45 s','3','0.23 s');
  WriteData('10', '+26', '-9%', '38%','0.45 s','3','0.23 s');
  WriteData('11', '+28', '-10%', '39%','0.45 s','3','0.23 s');
  WriteData('12', '+38', '-12%', '45%','0.70 s','4','0.35 s');
  WriteData('13', '+41', '-14%', '46%','0.70 s','4','0.35 s');
  WriteData('14', '+44', '-16%', '47%','0.70 s','4','0.35 s');
  WriteData('15', '+47', '-18%', '48%','0.70 s','4','0.35 s');
  WriteData('16', '+50', '-20%', '49%','0.70 s','4','0.35 s');
  if (showall) {
  WriteData('17', '+53', '-22%', '50%','0.70 s','4','0.35 s');
  }
  WriteSkillEnd();
}

function WriteSkillPlasvRnd(showall) {
  WriteSkill('Plasma-V&nbsp;Rounds', 'plasrnd', '+', 'This system can be activated to fuse destructive nanites with each round fired. Upon impact, these nanites tear through the target, briefly hindering its movement.');
  WriteSkillBegin();
  WriteHeader('Skill Level', 'Dmg.', 'Atk.&nbsp;Spd.', 'Slow', 'Duration', 'Energy', 'Cool.');
  WriteData('1', '+5', '-4%', '20%','0.25 s','1','--');
  WriteData('2', '+9', '-5%',  '20%','0.28 s','1','--');
  WriteData('3', '+13', '-5%', '20%','0.31 s','1','--');
  WriteData('4', '+17', '-6%', '20%','0.34 s','1','--');
  WriteData('5', '+21', '-6%', '20%','0.37 s','1','--');
  WriteData('6', '+25', '-7%', '20%','0.40 s','1','--');
  WriteData('7', '+29', '-7%', '20%','0.43 s','1','--');
  WriteData('8', '+33', '-8%', '20%','0.46 s','1','--');
  WriteSkillBegin2();
  WriteHeader('Skill Level', 'Dmg.', 'Atk.&nbsp;Spd.', 'Slow', 'Duration', 'Energy', 'Cool.');
  WriteData('9',  '+37', '-8%', '20%','0.49 s','1','--');
  WriteData('10', '+41', '-9%', '20%','0.52 s','1','--');
  WriteData('11', '+45', '-9%', '20%','0.55 s','1','--');
  WriteData('12', '+49', '-10%', '20%','0.58 s','1','--');
  WriteData('13', '+53', '-10%', '20%','0.61 s','1','--');
  WriteData('14', '+57', '-11%', '20%','0.64 s','1','--');
  WriteData('15', '+61', '-11%', '20%','0.67 s','1','--');
  WriteData('16', '+65', '-12%', '20%','0.70 s','1','--');
  if (showall) {
  WriteData('17', '+69', '-12%', '20%','0.73 s','1','--');
  }
  WriteSkillEnd();
}

function WriteSkillCrit(showall) {
  WriteSkill('Critical&nbsp;Shot', 'crit', '.', 'Knowledge of vulnerable points enables a chance for a shot to inflict massive damage to an enemy. Mechanical units do not have vulnerable points.');
  WriteSkillBegin();
  WriteHeader('Skill Level', 'Damage', 'Chance');
  WriteData('1', '2.0x', '10%');
  WriteData('2', '2.2x', '15%');
  WriteData('3', '2.4x', '20%');
  WriteData('4', '2.6x', '25%');
  WriteData('5', '2.8x', '30%');
  WriteData('6', '3.0x', '35%');
  WriteData('7', '3.2x', '40%');
  WriteData('8', '3.4x', '45%');
  if (showall) {
  WriteData('9', '3.6x', '50%');
  }
  WriteSkillEnd(true);
}

function WriteSkillLockdown(showall) {
  WriteSkill('Lock-Down', 'lockdown', 'E', 'Locks the officer in place for extra stability, giving him minor knockback and increased damage and attack speed but prevents movement. The officer will be unable to attack temporarily upon deactivating lockdown.');
  WriteSkillBegin();
  WriteHeader('Skill Level','Primary Damage','Attack Speed','Knockback','Delay','Cooldown');
  WriteData('1','+4%','+25%','0','3 s','6 s');
  WriteData('2','+9%','+25%','25','3 s','6 s');
  WriteData('3','+14%','+25%','50','3 s','6 s');
  WriteData('4','+20%','+25%','75','3 s','6 s');
  WriteData('5','+26%','+25%','100','3 s','6 s');
  WriteData('6','+33%','+25%','125','3 s','6 s');
  WriteData('7','+40%','+25%','150','3 s','6 s');
  WriteData('8','+48%','+25%','175','3 s','6 s');
  if (showall) {
  WriteData('9','+56%','+25%','200','3 s','6 s');
  }
  WriteSkillEnd(true);
}

function WriteSkillFuel(showall) {
  WriteSkill('Advanced&nbsp;Fuel', 'fuel', '.', 'Advanced fuel burns hotter, dealing more damage.');
  WriteSkillBegin();
  WriteHeader('Skill Level', 'Damage');
  WriteData('1', '+1');
  WriteData('2', '+2');
  WriteData('3', '+3');
  WriteData('4', '+4');
  WriteData('5', '+5');
  WriteData('6', '+6');
  WriteData('7', '+7');
  WriteData('8', '+8');
  WriteSkillBegin2();
  WriteHeader('Skill Level', 'Damage');
  WriteData('9', '+9');
  WriteData('10', '+10');
  WriteData('11', '+11');
  WriteData('12', '+12');
  WriteData('13', '+13');
  WriteData('14', '+14');
  WriteData('15', '+16');
  WriteData('16', '+18');
  if (showall) {
  WriteData('17', '+21');
  }
  WriteSkillEnd();
}

function WriteSkillLeftHead() {
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 width=100%><tr valign=top><td width=50% bgcolor=202020>');
}
function WriteSkillRightHead() {
  document.writeln('</td><td bgcolor=202020>');
}
function WriteSkillLeftStats() {
  document.writeln('</td></tr><tr valign=top><td>');
}
function WriteSkillRightStats() {
  document.writeln('</td><td>');
}
function WriteSkillLeftRightEnd() {
  document.writeln('</td></tr></table>');
}
function WriteSkillFocusLaser(showall) {
    WriteSkillBegin('60%');
    WriteSkillLeftHead();
    WriteSkill('Laser Power', 'laserrifle', '.', 'Increases the power of the laser rifle through the choice of a custom upgrade: Focus or Beam. Also decreases energy regen by -0.3 eps per level. This penalty is reduced with improvements in laser dissipation.');
    WriteSkillRightHead();
    WriteSkill('Laser Heat', 'laserrifle', '.', 'Lasers are especially effective against bosses, dealing extra damage based on the ammo level of the rifle.');
    WriteSkillLeftStats();
    WriteSkillBegin();
    WriteHeader('Skill Level', 'Energy Regen');
    WriteData('1','-5%');
    WriteData('2','-10%');
    WriteData('3','-15%');
    WriteData('4','-20%');
    WriteData('5','-25%');
    WriteData('6','-30%');
    WriteData('7','-35%');
    WriteData('8','-40%');
    if (showall) {
    WriteData('9', '-45%');
    }
    WriteSkillEnd();
    WriteSkillRightStats();
    WriteSkillBegin();
    WriteHeader('Ammo', 'Damage');
    WriteData('0', '+15');
    WriteData('1', '+30');
    WriteData('2', '+45');
    WriteData('3', '+60');
    WriteData('4', '+75');
    WriteData('5', '+90');
    WriteData('6', '+105');
    WriteData('7', '+120');
    WriteSkillEnd();
    WriteSkillLeftRightEnd();
    WriteSkillBegin('60%');
    WriteSkillLeftHead();
    WriteSkill('Laser Beam', 'laser_beam', '.', 'Improves the laser rifle\'s beam, causing it to deal a higher percentage of damage to targets it passes through.<br><font size=-1>This upgrade is part of the Laser Power ability.');
    WriteSkillRightHead();
    WriteSkill('Laser Focus', 'laser_focus', '.', 'Improves the laser rifle\'s focus, allowing it deal more damage to the individual target aimed at.<br><font size=-1>This upgrade is part of the Laser Power ability.');
    WriteSkillLeftStats();
    WriteSkillBegin();
    WriteHeader('Skill Level', 'Pierce');
    WriteData('0','10%');
    WriteData('1','14%');
    WriteData('2','18%');
    WriteData('3','22%');
    WriteData('4','26%');
    WriteData('5','30%');
    WriteData('6','34%');
    WriteData('7','38%');
    WriteData('8','42%');
    if (showall) {
    WriteData('9', '46%');
    }
    WriteSkillEnd();
    WriteSkillRightStats();
    WriteSkillBegin();
    WriteHeader('Skill Level', 'Damage');
    WriteData('0','+0');
    WriteData('1','+30');
    WriteData('2','+60');
    WriteData('3','+90');
    WriteData('4','+120');
    WriteData('5','+150');
    WriteData('6','+180');
    WriteData('7','+210');
    WriteData('8','+240');
    if (showall) {
    WriteData('9', '+270');
    }
    WriteSkillEnd();
    WriteSkillLeftRightEnd();
}


function WriteSkillAdvGen(unit) {
  if (unit == null) { unit = 'hero'; }
  if (unit == 'mav') {
  WriteSkill('Advanced&nbsp;Generator', 'gen', '.', 'Increases the hero\'s and adjacent robodog\'s rate of energy regeneration.');
  } else {
  WriteSkill('Advanced&nbsp;Generator', 'gen', '.', 'Increases the '+unit+'\'s rate of energy regeneration.');
  }
  if (unit == 'mav') {
  WriteSkillBegin();
  WriteHeader('Skill Level','Hero Energy Regen.','Robodog Energy Regen.');
  WriteData('1','+1 eps','+1 eps');
  WriteData('2','+2 eps','+2 eps');
  WriteData('3','+3 eps','+3 eps');
  WriteData('4','+4 eps','+4 eps');
  WriteData('5','+5 eps','+5 eps');
  WriteData('6','+6 eps','+6 eps');
  WriteData('7','+7 eps','+7 eps');
  WriteData('8','+8 eps','+8 eps');
  WriteSkillBegin2();
  WriteHeader('Skill Level','Hero Energy Regen.','Robodog Energy Regen.');
  WriteData('9','+9 eps','+9 eps');
  WriteData('10','+10 eps','+10 eps');
  WriteData('11','+11 eps','+11 eps');
  WriteData('12','+12 eps','+12 eps');
  WriteData('13','+13 eps','+13 eps');
  WriteData('14','+14 eps','+14 eps');
  WriteData('15','+15 eps','+15 eps');
  WriteData('16','+16 eps','+16 eps');
  } else {
  WriteSkillBegin();
  WriteHeader('Skill Level','Energy Regen.');
  WriteData('1','+1 eps');
  WriteData('2','+2 eps');
  WriteData('3','+3 eps');
  WriteData('4','+4 eps');
  WriteData('5','+5 eps');
  WriteData('6','+6 eps');
  WriteData('7','+7 eps');
  WriteData('8','+8 eps');
  WriteSkillBegin2();
  WriteHeader('Skill Level','Energy Regen.');
  if (unit == 'hero') {
  WriteData('9','+9 eps');
  WriteData('10','+10 eps');
  WriteData('11','+11 eps');
  WriteData('12','+12 eps');
  WriteData('13','+13 eps');
  WriteData('14','+14 eps');
  WriteData('15','+15 eps');
  WriteData('16','+16 eps');
  } else {
  WriteData('9','+9 eps');
  WriteData('10','+10 eps');
  WriteData('11','+11 eps');
  WriteData('12','+12 eps');
  WriteData('13','+13 eps');
  WriteData('14','+14 eps');
  WriteData('15','+15 eps');
  WriteData('16','+16 eps');
  }
  }
  WriteSkillEnd();
}

function WriteSkillSprint(Type) {
  WriteSkill('Sprint', 'sprint', null, 'Greatly increases movement speed and lets the hero slip right past units. Nanites Shield\'s protection is also improved while sprinting.</font><br><font size=-1>The values below reflect a hero in '+ ArmorName(Type) +' power armor.');
  WriteSkillBegin();
  if (Type == null) {
    WriteHeader('&nbsp;', 'Move Spd.', 'Duration', 'Energy', 'Cooldown');
    WriteData('Light','+50%', '6 s', '0', '20 s');
    WriteData('Medium','+60%', '6 s', '0', '30 s');
    WriteData('Heavy','+80%', '6 s', '0', '150 s');
    WriteData('Advanced','--', '--', '--', '--');
  }
  else {
    WriteHeader('Skill Level', 'Move Spd.', 'Duration', 'Energy', 'Cooldown');
    if (Type == 0) {
      WriteData('--','+50%', '6 s', '0', '20 s');
    } else if (Type == 1) {
      WriteData('--','+60%', '6 s', '0', '30 s');
    } else if (Type == 2) {
      WriteData('--','+80%', '6 s', '0', '150 s');
    } else if (Type == 6) {
      WriteData('--','+50%', '6 s', '0', '6 s');
    } else {
      WriteData('--','--', '--', '--', '--');
    }
  }
  WriteSkillEnd(true);
}

function WriteSkillFrag() {
  WriteSkill('Frag.&nbsp;Locator', 'frag', '', 'Uses a portable scanner to locate nearby radiation fragments.</font><br><font size=-1>Below left represents standard locator; below right represents advanced locator provided by Rad. Resistant trait.');
  WriteSkillBegin();
  WriteHeader('Renown', 'Number', 'Radius', 'Energy', 'Cooldown');
  WriteData('5', '7', '5500', '300', '75 s');
  WriteData('10', '7', '5500', '200', '50 s');
  WriteData('15', '7', '5500', '175', '40 s');
  WriteData('20', '7', '5500', '150', '30 s');
  WriteSkillBegin2();
  WriteHeader('Renown', 'Number', 'Radius', 'Energy', 'Cooldown');
  WriteData('1', '9', 'unlimited', '100', '60 s');
  WriteData('10', '9', 'unlimited', '75', '30 s');
  WriteData('15', '9', 'unlimited', '50', '12 s');
  WriteData('20', '9', 'unlimited', '25', '6 s');
  WriteSkillEnd();
}

function ConfigIconStr(Code, Abrva, Abrvb, Abrvc, Abrvd, Abrve, Abrvf) {
  if (Code != null) {
    var s = '<img src=pics/'+Code +'.gif width=32 height=32>';
    if (Abrva != null) {
      s = s + '<br><img src=pics/empty.gif width=31 height=1><br><img src="forum/images/smiles/class-'+Abrva +'.gif">';
      if (Abrvb != null) {
        s = s + '<img src=pics/empty.gif width=1 height=15><img src="forum/images/smiles/class-'+Abrvb +'.gif">';
        if (Abrvc != null) {
          s = s + '<br><img src=pics/empty.gif width=31 height=1><br><img src="forum/images/smiles/class-'+Abrvc +'.gif">';
          if (Abrvd != null) {
            s = s + '<img src=pics/empty.gif width=1 height=15><img src="forum/images/smiles/class-'+Abrvd +'.gif">';
            if (Abrve != null) {
              s = s + '<br><img src=pics/empty.gif width=31 height=1><br><img src="forum/images/smiles/class-'+Abrve +'.gif">';
              if (Abrvf != null) {
                s = s + '<img src=pics/empty.gif width=1 height=15><img src="forum/images/smiles/class-'+Abrvf +'.gif">';
              }
            }
          }
        }
      }
    }
    return s;
  } else {
    return '<img src=pics/empty.gif width=32 height=32>';
  }
}
function ConfigDescStr(Code, Name, Role, Description) {
  if (Code != null) {
    return '<b>'+Name +'</b><br><font color=ffe888 face=Arial size=-1>'+Role+'</font><br>'+Description;
  } else {
    return '';
  }
}
function WriteConfigSummary(Name1, Code1, Role1, Description1, Name2, Code2, Role2, Description2, Abrv1a, Abrv1b, Abrv1c, Abrv1d, Abrv1e, Abrv1f, Abrv2a, Abrv2b, Abvr2c, Abrv2d, Abrv2e, Abrv2f) {
  WriteOldRow4(ConfigIconStr(Code1, Abrv1a, Abrv1b, Abrv1c, Abrv1d, Abrv1e, Abrv1f), ConfigDescStr(Code1, Name1, Role1, Description1),
               ConfigIconStr(Code2, Abrv2a, Abrv2b, Abvr2c, Abrv2d, Abrv2e, Abrv2f), ConfigDescStr(Code2, Name2, Role2, Description2));
}

//skill header
function WriteSkillEngi(SkillName, SkillCode, Role, SkillDescription, SkillLinkClass, SkillLinkUnit) {
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 bgcolor=202020 width=100%><tr valign=top>');
  document.writeln('<td width=4>&nbsp;</td>');
  document.writeln('<td align=right width=32><img src=pics/'+SkillCode+'.jpg height=32 width=32></td>');
  document.writeln('<td width=4>&nbsp;</td>');
  document.writeln('<td align=left><font face=Arial><a name='+SkillCode+'><b>'+SkillName+'</a></b><br><font color=ffe888 face=Arial size=-1>'+Role+'</font>'+SkillLinkDisplayUnit(SkillLinkClass, SkillLinkUnit)+'<br>');
  document.writeln(SkillDescription);
  document.writeln('</font></td></tr><tr height=5><td></td></tr></table>');
}

//Get Page Name
function strpage() {
	var strUrl=window.location.href;
	var strPage="swat/cn" + strUrl.substr(24,100);
	return strPage;
}

function WriteQuest(QuestName, QuestCode, QuestImage, QuestDescription, QuestSS, QuestSStype, QuestSSLarge, QuestSSLargeType) {
  document.writeln('<table cellspacing=0 cellpadding=0 border=0 bgcolor=202020 width=100%><tr valign=top>');
  document.writeln('<td width=4>&nbsp;</td>');
  document.writeln('<td align=right width=32>');
  if (QuestImage != '') { document.writeln('<img src=pics/'+QuestImage+' height=32 width=32>'); }
  document.writeln('</td>');
  document.writeln('<td width=4>&nbsp;</td>');
  document.writeln('<td align=left>');
  if ((QuestSS != null) && (QuestSS != '')) {
      if(QuestSSLarge != null && QuestSSLarge != '') {
          document.writeln('<table cellpadding=1 cellspacing=4 border=0 align=right><tr><td bgcolor=ffe888><a href=pics/obj-'+QuestSSLarge+QuestSSLargeType+' target=_blank><img src=pics/obj-'+QuestSS+QuestSStype+' width=90 height=90 border=0></a></td></tr></table>');
      } else {
          document.writeln('<table cellpadding=1 cellspacing=4 border=0 align=right><tr><td bgcolor=ffe888><img src=pics/obj-'+QuestSS+QuestSStype+' width=90 height=90 border=0></a></td></tr></table>');
      }
  }
  document.writeln('<font face=Arial><a name='+QuestCode+'></a><b>'+QuestName+'</b><br>' + QuestDescription);
  document.writeln('</font></td></tr><tr height=5><td></td></tr></table>');
  document.writeln('<table cellspacing=2 cellpadding=4 border=0 width=100%>');
}
function WriteQData(DataName, Description, Done) {
  document.writeln('<tr align=center valign=top bgcolor=202020>');
  document.writeln('<td align=right width=90><font size=-1>' + DataName + '</font></td>');
  document.writeln('<td align=left><font size=-1 face=Arial color=ffe888>' + Description + '</font></td>');
  document.writeln('</tr>');
  if (Done) { document.writeln('</table>'); }
}

function WriteObjectivesMap(MapName) {
    document.write('<tr valign=top align=center>');
    document.write('<td width=8>&nbsp;</td>');
    document.write('<td width=1>');
    document.write('<a href=pics/map_' + MapName + '_full.png >');
    document.write('<img src=pics/map_' + MapName + '.png height=200/>');
    document.write('</a>');
    document.write('</td>');
    document.writeln('</tr>');
    document.writeln('<tr valign=top align=center><td width=8>&nbsp;</td><td width=1>');
}
