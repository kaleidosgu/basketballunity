var myAudioFile : AudioClip;
var nScoreHitID : int = 0;

function OnTriggerEnter (other : Collider) {
    if ( transform.tag == "scoretag" ) {
		var pComp : Component = other.transform.GetComponent("ballScoreData");
		pComp.addScoreHit(nScoreHitID);
		
		if ( transform.name == "scoreHit5" ) {
			if( pComp.checkScore() ) {
				shoot.SCORE_GET = shoot.SCORE_GET + 1;
				audio.PlayOneShot(myAudioFile);
				GameObject.Find("GUI SCORE").guiText.text = "Score: " + shoot.SCORE_GET;
			}
		}
	}
}