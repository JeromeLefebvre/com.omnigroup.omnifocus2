on round_up(this_number)
	if this_number = this_number div 1 then
		return this_number as integer
	else
		return this_number div 1 + 1
	end if
end round_up


on theSplit(theString, theDelimiter)
	-- save delimiters to restore old settings
	set oldDelimiters to AppleScript's text item delimiters
	-- set delimiters to delimiter to be used
	set AppleScript's text item delimiters to theDelimiter
	-- create the array
	set theArray to every text item of theString
	-- restore the old setting
	set AppleScript's text item delimiters to oldDelimiters
	-- return the result
	return theArray
end theSplit

tell application "OmniFocus"
	tell the default document to tell the front document window
		-- Set variables
		set mySelection to selected trees of content
		set myTask to value of item 1 of mySelection
		set theRepetition to get repetition rule of myTask
		set theRecurence to recurrence of theRepetition
		-- theRecurence = FREQ=MINUTELY;INTERVAL=30
		set myArray to my theSplit(theRecurence, "=")
		set frequencyUnit to item 1 of my theSplit(item 2 of myArray, ";")
		if the length of myArray > 2 then
			set theFrequency to item 3 of myArray as integer
		else
			set theFrequency to 1
		end if
		
		set theNewFrequency to my round_up(theFrequency * 1.1)
		
		set theRepetition's recurrence to "FREQ=HOURLY;INTERVAL=" & theNewFrequency
		
		set myTask's repetition rule to theRepetition
		mark complete myTask
	end tell
end tell