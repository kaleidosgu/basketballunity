var myAudioFile : AudioClip;
function OnCollisionEnter( collision : Collision ) {
	audio.PlayOneShot(myAudioFile);
}
