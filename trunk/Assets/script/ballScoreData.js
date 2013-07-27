var m_arrScoreHit = new Array ();
var m_bNoScoreBall = false;
function addScoreHit( nID : int ) {
	m_arrScoreHit.Push( nID );
}
function checkScore( ) {
	var nIndex : int = 1;
	var bRes : boolean = false;
	for (var value in m_arrScoreHit) {
        if( value <= nIndex ) {
		}
		else {
			break;
		}
		nIndex++;
    }
	if( nIndex == 6 ) {
		bRes = true;
	}
	else {
		// print(nIndex);
	}
	return bRes;
}