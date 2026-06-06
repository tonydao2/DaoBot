// This method checks DB and kicks user if they exceed certain amount of time
/*
User joins voice
    → voiceStateUpdate fires
    → DB read (fetch their total time)
    → setTimeout scheduled for remaining allowance
    → [silence — nothing happens]

User hits time limit
    → setTimeout fires
    → bot kicks them, DB write

User leaves normally
    → voiceStateUpdate fires
    → clearTimeout
    → DB write (persist elapsed time)
*/

