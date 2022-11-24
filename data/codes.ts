

interface CountryData {
    name: string,
    code: string,
    iso: string,
    population: string,
    area: string,
    gdp: string
}

const countryCodes : CountryData[] = [{"name":"Afghanistan","code":"93","iso":"AF / AFG","population":"29,121,286","area":"647,500","gdp":"20.65 Billion"},{"name":"Albania","code":"355","iso":"AL / ALB","population":"2,986,952","area":"28,748","gdp":"12.8 Billion"},{"name":"Algeria","code":"213","iso":"DZ / DZA","population":"34,586,184","area":"2,381,740","gdp":"215.7 Billion"},{"name":"American Samoa","code":"1-684","iso":"AS / ASM","population":"57,881","area":"199","gdp":"462.2 Million"},{"name":"Andorra","code":"376","iso":"AD / AND","population":"84,000","area":"468","gdp":"4.8 Billion"},{"name":"Angola","code":"244","iso":"AO / AGO","population":"13,068,161","area":"1,246,700","gdp":"124 Billion"},{"name":"Anguilla","code":"1-264","iso":"AI / AIA","population":"13,254","area":"102","gdp":"175.4 Million"},{"name":"Antarctica","code":"672","iso":"AQ / ATA","population":"0","area":"14,000,000","gdp":""},{"name":"Antigua and Barbuda","code":"1-268","iso":"AG / ATG","population":"86,754","area":"443","gdp":"1.22 Billion"},{"name":"Argentina","code":"54","iso":"AR / ARG","population":"41,343,201","area":"2,766,890","gdp":"484.6 Billion"},{"name":"Armenia","code":"374","iso":"AM / ARM","population":"2,968,000","area":"29,800","gdp":"10.44 Billion"},{"name":"Aruba","code":"297","iso":"AW / ABW","population":"71,566","area":"193","gdp":"2.516 Billion"},{"name":"Australia","code":"61","iso":"AU / AUS","population":"21,515,754","area":"7,686,850","gdp":"1.488 Trillion"},{"name":"Austria","code":"43","iso":"AT / AUT","population":"8,205,000","area":"83,858","gdp":"417.9 Billion"},{"name":"Azerbaijan","code":"994","iso":"AZ / AZE","population":"8,303,512","area":"86,600","gdp":"76.01 Billion"},{"name":"Bahamas","code":"1-242","iso":"BS / BHS","population":"301,790","area":"13,940","gdp":"8.373 Billion"},{"name":"Bahrain","code":"973","iso":"BH / BHR","population":"738,004","area":"665","gdp":"28.36 Billion"},{"name":"Bangladesh","code":"880","iso":"BD / BGD","population":"156,118,464","area":"144,000","gdp":"140.2 Billion"},{"name":"Barbados","code":"1-246","iso":"BB / BRB","population":"285,653","area":"431","gdp":"4.262 Billion"},{"name":"Belarus","code":"375","iso":"BY / BLR","population":"9,685,000","area":"207,600","gdp":"69.24 Billion"},{"name":"Belgium","code":"32","iso":"BE / BEL","population":"10,403,000","area":"30,510","gdp":"507.4 Billion"},{"name":"Belize","code":"501","iso":"BZ / BLZ","population":"314,522","area":"22,966","gdp":"1.637 Billion"},{"name":"Benin","code":"229","iso":"BJ / BEN","population":"9,056,010","area":"112,620","gdp":"8.359 Billion"},{"name":"Bermuda","code":"1-441","iso":"BM / BMU","population":"65,365","area":"53","gdp":"5.6 Billion"},{"name":"Bhutan","code":"975","iso":"BT / BTN","population":"699,847","area":"47,000","gdp":"2.133 Billion"},{"name":"Bolivia","code":"591","iso":"BO / BOL","population":"9,947,418","area":"1,098,580","gdp":"30.79 Billion"},{"name":"Bosnia and Herzegovina","code":"387","iso":"BA / BIH","population":"4,590,000","area":"51,129","gdp":"18.87 Billion"},{"name":"Botswana","code":"267","iso":"BW / BWA","population":"2,029,307","area":"600,370","gdp":"15.53 Billion"},{"name":"Brazil","code":"55","iso":"BR / BRA","population":"201,103,330","area":"8,511,965","gdp":"2.19 Trillion"},{"name":"British Indian Ocean Territory","code":"246","iso":"IO / IOT","population":"4,000","area":"60","gdp":""},{"name":"British Virgin Islands","code":"1-284","iso":"VG / VGB","population":"21,730","area":"153","gdp":"1.095 Billion"},{"name":"Brunei","code":"673","iso":"BN / BRN","population":"395,027","area":"5,770","gdp":"16.56 Billion"},{"name":"Bulgaria","code":"359","iso":"BG / BGR","population":"7,148,785","area":"110,910","gdp":"53.7 Billion"},{"name":"Burkina Faso","code":"226","iso":"BF / BFA","population":"16,241,811","area":"274,200","gdp":"12.13 Billion"},{"name":"Myanmar","code":"95","iso":"MM / MMR","population":"53,414,374","area":"678,500","gdp":"59.43 Billion"},{"name":"Burundi","code":"257","iso":"BI / BDI","population":"9,863,117","area":"27,830","gdp":"2.676 Billion"},{"name":"Cambodia","code":"855","iso":"KH / KHM","population":"14,453,680","area":"181,040","gdp":"15.64 Billion"},{"name":"Cameroon","code":"237","iso":"CM / CMR","population":"19,294,149","area":"475,440","gdp":"27.88 Billion"},{"name":"Canada","code":"1","iso":"CA / CAN","population":"33,679,000","area":"9,984,670","gdp":"1.825 Trillion"},{"name":"Cape Verde","code":"238","iso":"CV / CPV","population":"508,659","area":"4,033","gdp":"1.955 Billion"},{"name":"Cayman Islands","code":"1-345","iso":"KY / CYM","population":"44,270","area":"262","gdp":"2.25 Billion"},{"name":"Central African Republic","code":"236","iso":"CF / CAF","population":"4,844,927","area":"622,984","gdp":"2.05 Billion"},{"name":"Chad","code":"235","iso":"TD / TCD","population":"10,543,464","area":"1,284,000","gdp":"13.59 Billion"},{"name":"Chile","code":"56","iso":"CL / CHL","population":"16,746,491","area":"756,950","gdp":"281.7 Billion"},{"name":"China","code":"86","iso":"CN / CHN","population":"1,330,044,000","area":"9,596,960","gdp":"9.33 Trillion"},{"name":"Christmas Island","code":"61","iso":"CX / CXR","population":"1,500","area":"135","gdp":""},{"name":"Cocos Islands","code":"61","iso":"CC / CCK","population":"628","area":"14","gdp":""},{"name":"Colombia","code":"57","iso":"CO / COL","population":"47,790,000","area":"1,138,910","gdp":"369.2 Billion"},{"name":"Comoros","code":"269","iso":"KM / COM","population":"773,407","area":"2,170","gdp":"658 Million"},{"name":"Republic of the Congo","code":"242","iso":"CG / COG","population":"3,039,126","area":"342,000","gdp":"14.25 Billion"},{"name":"Democratic Republic of the Congo","code":"243","iso":"CD / COD","population":"70,916,439","area":"2,345,410","gdp":"18.56 Billion"},{"name":"Cook Islands","code":"682","iso":"CK / COK","population":"21,388","area":"240","gdp":"183.2 Million"},{"name":"Costa Rica","code":"506","iso":"CR / CRI","population":"4,516,220","area":"51,100","gdp":"48.51 Billion"},{"name":"Croatia","code":"385","iso":"HR / HRV","population":"4,491,000","area":"56,542","gdp":"59.14 Billion"},{"name":"Cuba","code":"53","iso":"CU / CUB","population":"11,423,000","area":"110,860","gdp":"72.3 Billion"},{"name":"Curacao","code":"599","iso":"CW / CUW","population":"141,766","area":"444","gdp":"5.6 Billion"},{"name":"Cyprus","code":"357","iso":"CY / CYP","population":"1,102,677","area":"9,250","gdp":"21.78 Billion"},{"name":"Czech Republic","code":"420","iso":"CZ / CZE","population":"10,476,000","area":"78,866","gdp":"194.8 Billion"},{"name":"Denmark","code":"45","iso":"DK / DNK","population":"5,484,000","area":"43,094","gdp":"324.3 Billion"},{"name":"Djibouti","code":"253","iso":"DJ / DJI","population":"740,528","area":"23,000","gdp":"1.459 Billion"},{"name":"Dominica","code":"1-767","iso":"DM / DMA","population":"72,813","area":"754","gdp":"495 Million"},{"name":"Dominican Republic","code":"1-809, 1-829, 1-849","iso":"DO / DOM","population":"9,823,821","area":"48,730","gdp":"59.27 Billion"},{"name":"East Timor","code":"670","iso":"TL / TLS","population":"1,154,625","area":"15,007","gdp":"6.129 Billion"},{"name":"Ecuador","code":"593","iso":"EC / ECU","population":"14,790,608","area":"283,560","gdp":"91.41 Billion"},{"name":"Egypt","code":"20","iso":"EG / EGY","population":"80,471,869","area":"1,001,450","gdp":"262 Billion"},{"name":"El Salvador","code":"503","iso":"SV / SLV","population":"6,052,064","area":"21,040","gdp":"24.67 Billion"},{"name":"Equatorial Guinea","code":"240","iso":"GQ / GNQ","population":"1,014,999","area":"28,051","gdp":"17.08 Billion"},{"name":"Eritrea","code":"291","iso":"ER / ERI","population":"5,792,984","area":"121,320","gdp":"3.438 Billion"},{"name":"Estonia","code":"372","iso":"EE / EST","population":"1,291,170","area":"45,226","gdp":"24.28 Billion"},{"name":"Ethiopia","code":"251","iso":"ET / ETH","population":"88,013,491","area":"1,127,127","gdp":"47.34 Billion"},{"name":"Falkland Islands","code":"500","iso":"FK / FLK","population":"2,638","area":"12,173","gdp":"164.5 Million"},{"name":"Faroe Islands","code":"298","iso":"FO / FRO","population":"48,228","area":"1,399","gdp":"2.32 Billion"},{"name":"Fiji","code":"679","iso":"FJ / FJI","population":"875,983","area":"18,270","gdp":"4.218 Billion"},{"name":"Finland","code":"358","iso":"FI / FIN","population":"5,244,000","area":"337,030","gdp":"259.6 Billion"},{"name":"France","code":"33","iso":"FR / FRA","population":"64,768,389","area":"547,030","gdp":"2.739 Trillion"},{"name":"French Polynesia","code":"689","iso":"PF / PYF","population":"270,485","area":"4,167","gdp":"5.65 Billion"},{"name":"Gabon","code":"241","iso":"GA / GAB","population":"1,545,255","area":"267,667","gdp":"19.97 Billion"},{"name":"Gambia","code":"220","iso":"GM / GMB","population":"1,593,256","area":"11,300","gdp":"896 Million"},{"name":"Georgia","code":"995","iso":"GE / GEO","population":"4,630,000","area":"69,700","gdp":"15.95 Billion"},{"name":"Germany","code":"49","iso":"DE / DEU","population":"81,802,257","area":"357,021","gdp":"3.593 Trillion"},{"name":"Ghana","code":"233","iso":"GH / GHA","population":"24,339,838","area":"239,460","gdp":"45.55 Billion"},{"name":"Gibraltar","code":"350","iso":"GI / GIB","population":"27,884","area":"7","gdp":"1.106 Billion"},{"name":"Greece","code":"30","iso":"GR / GRC","population":"11,000,000","area":"131,940","gdp":"243.3 Billion"},{"name":"Greenland","code":"299","iso":"GL / GRL","population":"56,375","area":"2,166,086","gdp":"2.16 Billion"},{"name":"Grenada","code":"1-473","iso":"GD / GRD","population":"107,818","area":"344","gdp":"811 Million"},{"name":"Guam","code":"1-671","iso":"GU / GUM","population":"159,358","area":"549","gdp":"4.6 Billion"},{"name":"Guatemala","code":"502","iso":"GT / GTM","population":"13,550,440","area":"108,890","gdp":"53.9 Billion"},{"name":"Guernsey","code":"44-1481","iso":"GG / GGY","population":"65,228","area":"78","gdp":"2.742 Billion"},{"name":"Guinea","code":"224","iso":"GN / GIN","population":"10,324,025","area":"245,857","gdp":"6.544 Billion"},{"name":"Guinea-Bissau","code":"245","iso":"GW / GNB","population":"1,565,126","area":"36,120","gdp":"880 Million"},{"name":"Guyana","code":"592","iso":"GY / GUY","population":"748,486","area":"214,970","gdp":"3.02 Billion"},{"name":"Haiti","code":"509","iso":"HT / HTI","population":"9,648,924","area":"27,750","gdp":"8.287 Billion"},{"name":"Honduras","code":"504","iso":"HN / HND","population":"7,989,415","area":"112,090","gdp":"18.88 Billion"},{"name":"Hong Kong","code":"852","iso":"HK / HKG","population":"6,898,686","area":"1,092","gdp":"272.1 Billion"},{"name":"Hungary","code":"36","iso":"HU / HUN","population":"9,982,000","area":"93,030","gdp":"130.6 Billion"},{"name":"Iceland","code":"354","iso":"IS / ISL","population":"308,910","area":"103,000","gdp":"14.59 Billion"},{"name":"India","code":"91","iso":"IN / IND","population":"1,173,108,018","area":"3,287,590","gdp":"1.67 Trillion"},{"name":"Indonesia","code":"62","iso":"ID / IDN","population":"242,968,342","area":"1,919,440","gdp":"867.5 Billion"},{"name":"Iran","code":"98","iso":"IR / IRN","population":"76,923,300","area":"1,648,000","gdp":"411.9 Billion"},{"name":"Iraq","code":"964","iso":"IQ / IRQ","population":"29,671,605","area":"437,072","gdp":"221.8 Billion"},{"name":"Ireland","code":"353","iso":"IE / IRL","population":"4,622,917","area":"70,280","gdp":"220.9 Billion"},{"name":"Isle of Man","code":"44-1624","iso":"IM / IMN","population":"75,049","area":"572","gdp":"4.076 Billion"},{"name":"Israel","code":"972","iso":"IL / ISR","population":"7,353,985","area":"20,770","gdp":"272.7 Billion"},{"name":"Italy","code":"39","iso":"IT / ITA","population":"60,340,328","area":"301,230","gdp":"2.068 Trillion"},{"name":"Ivory Coast","code":"225","iso":"CI / CIV","population":"21,058,798","area":"322,460","gdp":"28.28 Billion"},{"name":"Jamaica","code":"1-876","iso":"JM / JAM","population":"2,847,232","area":"10,991","gdp":"14.39 Billion"},{"name":"Japan","code":"81","iso":"JP / JPN","population":"127,288,000","area":"377,835","gdp":"5.007 Trillion"},{"name":"Jersey","code":"44-1534","iso":"JE / JEY","population":"90,812","area":"116","gdp":"5.1 Billion"},{"name":"Jordan","code":"962","iso":"JO / JOR","population":"6,407,085","area":"92,300","gdp":"34.08 Billion"},{"name":"Kazakhstan","code":"7","iso":"KZ / KAZ","population":"15,340,000","area":"2,717,300","gdp":"224.9 Billion"},{"name":"Kenya","code":"254","iso":"KE / KEN","population":"40,046,566","area":"582,650","gdp":"45.31 Billion"},{"name":"Kiribati","code":"686","iso":"KI / KIR","population":"92,533","area":"811","gdp":"173 Million"},{"name":"Kosovo","code":"383","iso":"XK / XKX","population":"1,800,000","area":"10,887","gdp":"7.15 Billion"},{"name":"Kuwait","code":"965","iso":"KW / KWT","population":"2,789,132","area":"17,820","gdp":"179.5 Billion"},{"name":"Kyrgyzstan","code":"996","iso":"KG / KGZ","population":"5,508,626","area":"198,500","gdp":"7.234 Billion"},{"name":"Laos","code":"856","iso":"LA / LAO","population":"6,368,162","area":"236,800","gdp":"10.1 Billion"},{"name":"Latvia","code":"371","iso":"LV / LVA","population":"2,217,969","area":"64,589","gdp":"30.38 Billion"},{"name":"Lebanon","code":"961","iso":"LB / LBN","population":"4,125,247","area":"10,400","gdp":"43.49 Billion"},{"name":"Lesotho","code":"266","iso":"LS / LSO","population":"1,919,552","area":"30,355","gdp":"2.457 Billion"},{"name":"Liberia","code":"231","iso":"LR / LBR","population":"3,685,076","area":"111,370","gdp":"1.977 Billion"},{"name":"Libya","code":"218","iso":"LY / LBY","population":"6,461,454","area":"1,759,540","gdp":"70.92 Billion"},{"name":"Liechtenstein","code":"423","iso":"LI / LIE","population":"35,000","area":"160","gdp":"5.113 Billion"},{"name":"Lithuania","code":"370","iso":"LT / LTU","population":"2,944,459","area":"65,200","gdp":"46.71 Billion"},{"name":"Luxembourg","code":"352","iso":"LU / LUX","population":"497,538","area":"2,586","gdp":"60.54 Billion"},{"name":"Macau","code":"853","iso":"MO / MAC","population":"449,198","area":"254","gdp":"51.68 Billion"},{"name":"Macedonia","code":"389","iso":"MK / MKD","population":"2,062,294","area":"25,333","gdp":"10.65 Billion"},{"name":"Madagascar","code":"261","iso":"MG / MDG","population":"21,281,844","area":"587,040","gdp":"10.53 Billion"},{"name":"Malawi","code":"265","iso":"MW / MWI","population":"15,447,500","area":"118,480","gdp":"3.683 Billion"},{"name":"Malaysia","code":"60","iso":"MY / MYS","population":"28,274,729","area":"329,750","gdp":"312.4 Billion"},{"name":"Maldives","code":"960","iso":"MV / MDV","population":"395,650","area":"300","gdp":"2.27 Billion"},{"name":"Mali","code":"223","iso":"ML / MLI","population":"13,796,354","area":"1,240,000","gdp":"11.37 Billion"},{"name":"Malta","code":"356","iso":"MT / MLT","population":"403,000","area":"316","gdp":"9.541 Billion"},{"name":"Marshall Islands","code":"692","iso":"MH / MHL","population":"65,859","area":"181","gdp":"193 Million"},{"name":"Mauritania","code":"222","iso":"MR / MRT","population":"3,205,060","area":"1,030,700","gdp":"4.183 Billion"},{"name":"Mauritius","code":"230","iso":"MU / MUS","population":"1,294,104","area":"2,040","gdp":"11.9 Billion"},{"name":"Mayotte","code":"262","iso":"YT / MYT","population":"159,042","area":"374","gdp":""},{"name":"Mexico","code":"52","iso":"MX / MEX","population":"112,468,855","area":"1,972,550","gdp":"1.327 Trillion"},{"name":"Micronesia","code":"691","iso":"FM / FSM","population":"107,708","area":"702","gdp":"339 Million"},{"name":"Moldova","code":"373","iso":"MD / MDA","population":"4,324,000","area":"33,843","gdp":"7.932 Billion"},{"name":"Monaco","code":"377","iso":"MC / MCO","population":"32,965","area":"2","gdp":"5.748 Billion"},{"name":"Mongolia","code":"976","iso":"MN / MNG","population":"3,086,918","area":"1,565,000","gdp":"11.14 Billion"},{"name":"Montenegro","code":"382","iso":"ME / MNE","population":"666,730","area":"14,026","gdp":"4.518 Billion"},{"name":"Montserrat","code":"1-664","iso":"MS / MSR","population":"9,341","area":"102","gdp":""},{"name":"Morocco","code":"212","iso":"MA / MAR","population":"31,627,428","area":"446,550","gdp":"104.8 Billion"},{"name":"Mozambique","code":"258","iso":"MZ / MOZ","population":"22,061,451","area":"801,590","gdp":"14.67 Billion"},{"name":"Namibia","code":"264","iso":"NA / NAM","population":"2,128,471","area":"825,418","gdp":"12.3 Billion"},{"name":"Nauru","code":"674","iso":"NR / NRU","population":"10,065","area":"21","gdp":""},{"name":"Nepal","code":"977","iso":"NP / NPL","population":"28,951,852","area":"140,800","gdp":"19.34 Billion"},{"name":"Netherlands","code":"31","iso":"NL / NLD","population":"16,645,000","area":"41,526","gdp":"722.3 Billion"},{"name":"Netherlands Antilles","code":"599","iso":"AN / ANT","population":"136,197","area":"960","gdp":""},{"name":"New Caledonia","code":"687","iso":"NC / NCL","population":"216,494","area":"19,060","gdp":"9.28 Billion"},{"name":"New Zealand","code":"64","iso":"NZ / NZL","population":"4,252,277","area":"268,680","gdp":"181.1 Billion"},{"name":"Nicaragua","code":"505","iso":"NI / NIC","population":"5,995,928","area":"129,494","gdp":"11.26 Billion"},{"name":"Niger","code":"227","iso":"NE / NER","population":"15,878,271","area":"1,267,000","gdp":"7.304 Billion"},{"name":"Nigeria","code":"234","iso":"NG / NGA","population":"154,000,000","area":"923,768","gdp":"502 Billion"},{"name":"Niue","code":"683","iso":"NU / NIU","population":"2,166","area":"260","gdp":"10.01 Million"},{"name":"Northern Mariana Islands","code":"1-670","iso":"MP / MNP","population":"53,883","area":"477","gdp":"733 Million"},{"name":"North Korea","code":"850","iso":"KP / PRK","population":"22,912,177","area":"120,540","gdp":"28 Billion"},{"name":"Norway","code":"47","iso":"NO / NOR","population":"5,009,150","area":"324,220","gdp":"515.8 Billion"},{"name":"Oman","code":"968","iso":"OM / OMN","population":"2,967,717","area":"212,460","gdp":"81.95 Billion"},{"name":"Pakistan","code":"92","iso":"PK / PAK","population":"184,404,791","area":"803,940","gdp":"236.5 Billion"},{"name":"Palau","code":"680","iso":"PW / PLW","population":"19,907","area":"458","gdp":"221 Million"},{"name":"Palestine","code":"970","iso":"PS / PSE","population":"3,800,000","area":"5,970","gdp":"6.641 Billion"},{"name":"Panama","code":"507","iso":"PA / PAN","population":"3,410,676","area":"78,200","gdp":"40.62 Billion"},{"name":"Papua New Guinea","code":"675","iso":"PG / PNG","population":"6,064,515","area":"462,840","gdp":"16.1 Billion"},{"name":"Paraguay","code":"595","iso":"PY / PRY","population":"6,375,830","area":"406,750","gdp":"30.56 Billion"},{"name":"Peru","code":"51","iso":"PE / PER","population":"29,907,003","area":"1,285,220","gdp":"210.3 Billion"},{"name":"Philippines","code":"63","iso":"PH / PHL","population":"99,900,177","area":"300,000","gdp":"272.2 Billion"},{"name":"Pitcairn","code":"64","iso":"PN / PCN","population":"46","area":"47","gdp":""},{"name":"Poland","code":"48","iso":"PL / POL","population":"38,500,000","area":"312,685","gdp":"513.9 Billion"},{"name":"Portugal","code":"351","iso":"PT / PRT","population":"10,676,000","area":"92,391","gdp":"219.3 Billion"},{"name":"Puerto Rico","code":"1-787, 1-939","iso":"PR / PRI","population":"3,916,632","area":"9,104","gdp":"93.52 Billion"},{"name":"Qatar","code":"974","iso":"QA / QAT","population":"840,926","area":"11,437","gdp":"213.1 Billion"},{"name":"Reunion","code":"262","iso":"RE / REU","population":"776,948","area":"2,517","gdp":""},{"name":"Romania","code":"40","iso":"RO / ROU","population":"21,959,278","area":"237,500","gdp":"188.9 Billion"},{"name":"Russia","code":"7","iso":"RU / RUS","population":"140,702,000","area":"17,100,000","gdp":"2.113 Trillion"},{"name":"Rwanda","code":"250","iso":"RW / RWA","population":"11,055,976","area":"26,338","gdp":"7.7 Billion"},{"name":"Saint Barthelemy","code":"590","iso":"BL / BLM","population":"8,450","area":"21","gdp":""},{"name":"Samoa","code":"685","iso":"WS / WSM","population":"192,001","area":"2,944","gdp":"705 Million"},{"name":"San Marino","code":"378","iso":"SM / SMR","population":"31,477","area":"61","gdp":"1.866 Billion"},{"name":"Sao Tome and Principe","code":"239","iso":"ST / STP","population":"175,808","area":"1,001","gdp":"311 Million"},{"name":"Saudi Arabia","code":"966","iso":"SA / SAU","population":"25,731,776","area":"1,960,582","gdp":"718.5 Billion"},{"name":"Senegal","code":"221","iso":"SN / SEN","population":"12,323,252","area":"196,190","gdp":"15.36 Billion"},{"name":"Serbia","code":"381","iso":"RS / SRB","population":"7,344,847","area":"88,361","gdp":"43.68 Billion"},{"name":"Seychelles","code":"248","iso":"SC / SYC","population":"88,340","area":"455","gdp":"1.271 Billion"},{"name":"Sierra Leone","code":"232","iso":"SL / SLE","population":"5,245,695","area":"71,740","gdp":"4.607 Billion"},{"name":"Singapore","code":"65","iso":"SG / SGP","population":"4,701,069","area":"693","gdp":"295.7 Billion"},{"name":"Sint Maarten","code":"1-721","iso":"SX / SXM","population":"37,429","area":"34","gdp":"794.7 Million"},{"name":"Slovakia","code":"421","iso":"SK / SVK","population":"5,455,000","area":"48,845","gdp":"96.96 Billion"},{"name":"Slovenia","code":"386","iso":"SI / SVN","population":"2,007,000","area":"20,273","gdp":"46.82 Billion"},{"name":"Solomon Islands","code":"677","iso":"SB / SLB","population":"559,198","area":"28,450","gdp":"1.099 Billion"},{"name":"Somalia","code":"252","iso":"SO / SOM","population":"10,112,453","area":"637,657","gdp":"2.372 Billion"},{"name":"South Africa","code":"27","iso":"ZA / ZAF","population":"49,000,000","area":"1,219,912","gdp":"353.9 Billion"},{"name":"South Korea","code":"82","iso":"KR / KOR","population":"48,422,644","area":"98,480","gdp":"1.198 Trillion"},{"name":"South Sudan","code":"211","iso":"SS / SSD","population":"8,260,490","area":"644,329","gdp":"11.77 Billion"},{"name":"Spain","code":"34","iso":"ES / ESP","population":"46,505,963","area":"504,782","gdp":"1.356 Trillion"},{"name":"Sri Lanka","code":"94","iso":"LK / LKA","population":"21,513,990","area":"65,610","gdp":"65.12 Billion"},{"name":"Saint Helena","code":"290","iso":"SH / SHN","population":"7,460","area":"410","gdp":""},{"name":"Saint Kitts and Nevis","code":"1-869","iso":"KN / KNA","population":"51,134","area":"261","gdp":"767 Million"},{"name":"Saint Lucia","code":"1-758","iso":"LC / LCA","population":"160,922","area":"616","gdp":"1.377 Billion"},{"name":"Saint Martin","code":"590","iso":"MF / MAF","population":"35,925","area":"53","gdp":"561.5 Million"},{"name":"Saint Pierre and Miquelon","code":"508","iso":"PM / SPM","population":"7,012","area":"242","gdp":"215.3 Million"},{"name":"Saint Vincent and the Grenadines","code":"1-784","iso":"VC / VCT","population":"104,217","area":"389","gdp":"742 Million"},{"name":"Sudan","code":"249","iso":"SD / SDN","population":"35,000,000","area":"1,861,484","gdp":"52.5 Billion"},{"name":"Suriname","code":"597","iso":"SR / SUR","population":"492,829","area":"163,270","gdp":"5.009 Billion"},{"name":"Svalbard and Jan Mayen","code":"47","iso":"SJ / SJM","population":"2,550","area":"62,049","gdp":""},{"name":"Swaziland","code":"268","iso":"SZ / SWZ","population":"1,354,051","area":"17,363","gdp":"3.807 Billion"},{"name":"Sweden","code":"46","iso":"SE / SWE","population":"9,555,893","area":"449,964","gdp":"552 Billion"},{"name":"Switzerland","code":"41","iso":"CH / CHE","population":"7,581,000","area":"41,290","gdp":"646.2 Billion"},{"name":"Syria","code":"963","iso":"SY / SYR","population":"22,198,110","area":"185,180","gdp":"64.7 Billion"},{"name":"Taiwan","code":"886","iso":"TW / TWN","population":"22,894,384","area":"35,980","gdp":"484.7 Billion"},{"name":"Tajikistan","code":"992","iso":"TJ / TJK","population":"7,487,489","area":"143,100","gdp":"8.513 Billion"},{"name":"Tanzania","code":"255","iso":"TZ / TZA","population":"41,892,895","area":"945,087","gdp":"31.94 Billion"},{"name":"Thailand","code":"66","iso":"TH / THA","population":"67,089,500","area":"514,000","gdp":"400.9 Billion"},{"name":"Togo","code":"228","iso":"TG / TGO","population":"6,587,239","area":"56,785","gdp":"4.299 Billion"},{"name":"Tokelau","code":"690","iso":"TK / TKL","population":"1,466","area":"10","gdp":""},{"name":"Tonga","code":"676","iso":"TO / TON","population":"122,580","area":"748","gdp":"477 Million"},{"name":"Trinidad and Tobago","code":"1-868","iso":"TT / TTO","population":"1,228,691","area":"5,128","gdp":"27.13 Billion"},{"name":"Tunisia","code":"216","iso":"TN / TUN","population":"10,589,025","area":"163,610","gdp":"48.38 Billion"},{"name":"Turkey","code":"90","iso":"TR / TUR","population":"77,804,122","area":"780,580","gdp":"821.8 Billion"},{"name":"Turkmenistan","code":"993","iso":"TM / TKM","population":"4,940,916","area":"488,100","gdp":"40.56 Billion"},{"name":"Turks and Caicos Islands","code":"1-649","iso":"TC / TCA","population":"20,556","area":"430","gdp":""},{"name":"Tuvalu","code":"688","iso":"TV / TUV","population":"10,472","area":"26","gdp":"38 Million"},{"name":"United Arab Emirates","code":"971","iso":"AE / ARE","population":"4,975,593","area":"82,880","gdp":"390 Billion"},{"name":"Uganda","code":"256","iso":"UG / UGA","population":"33,398,682","area":"236,040","gdp":"22.6 Billion"},{"name":"United Kingdom","code":"44","iso":"GB / GBR","population":"62,348,447","area":"244,820","gdp":"2.49 Trillion"},{"name":"Ukraine","code":"380","iso":"UA / UKR","population":"45,415,596","area":"603,700","gdp":"175.5 Billion"},{"name":"Uruguay","code":"598","iso":"UY / URY","population":"3,477,000","area":"176,220","gdp":"57.11 Billion"},{"name":"United States","code":"1","iso":"US / USA","population":"310,232,863","area":"9,629,091","gdp":"16.72 Trillion"},{"name":"Uzbekistan","code":"998","iso":"UZ / UZB","population":"27,865,738","area":"447,400","gdp":"55.18 Billion"},{"name":"Vanuatu","code":"678","iso":"VU / VUT","population":"221,552","area":"12,200","gdp":"828 Million"},{"name":"Vatican","code":"379","iso":"VA / VAT","population":"921","area":"0","gdp":""},{"name":"Venezuela","code":"58","iso":"VE / VEN","population":"27,223,228","area":"912,050","gdp":"367.5 Billion"},{"name":"Vietnam","code":"84","iso":"VN / VNM","population":"89,571,130","area":"329,560","gdp":"170 Billion"},{"name":"U.S. Virgin Islands","code":"1-340","iso":"VI / VIR","population":"108,708","area":"352","gdp":""},{"name":"Wallis and Futuna","code":"681","iso":"WF / WLF","population":"16,025","area":"274","gdp":""},{"name":"Western Sahara","code":"212","iso":"EH / ESH","population":"273,008","area":"266,000","gdp":""},{"name":"Yemen","code":"967","iso":"YE / YEM","population":"23,495,361","area":"527,970","gdp":"43.89 Billion"},{"name":"Zambia","code":"260","iso":"ZM / ZMB","population":"13,460,305","area":"752,614","gdp":"22.24 Billion"},{"name":"Zimbabwe","code":"263","iso":"ZW / ZWE","population":"11,651,858","area":"390,580","gdp":"10.48 Billion"}];

export { type CountryData, countryCodes };

