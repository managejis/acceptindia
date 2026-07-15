function frame_breakout()
{
  // Break out of frames
  if (top.location != location) {
    top.location.href = document.location.href ;
  }
}