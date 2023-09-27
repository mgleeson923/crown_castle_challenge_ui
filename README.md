# crown_castle_challenge_ui
UI Challenge for The Checkers Game

Notes:
 - Because the opponent follows your move with the same one each time, it was simpler to just establish a pattern. Ideally, we'd want to make this test more modular and select pieces at random, then analyze where the bot moved. 
 - Secondly, the elements should have some sort of automation tag (ex: data-qa="orange piece 1") or something of that nature. That would make it easier to follow the test than having to use the space names. 
 - With extra time, I'd want to set up a link checker that runs through all the links in the footer and verifies they're healthy links (ie: just confirm a 200 code if they're clicked, and that they route to the expected locations)
 - I'd also look at some negative scenarios (trying to move a piece to an ineligible board spot and verifying the message displays the correct warning, etc)
