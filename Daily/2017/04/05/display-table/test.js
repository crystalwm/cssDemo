		var numMessages = strMessagesArray.length;

		var ifExistWaringIcon = false;
		var ifExistInfoIcon = false;
		var waringMessagesPrint = '';
		var infoMessagesPrint = '';
		for (i = 0; i < strMessagesArray.length; i++) {
		    if (strMessagesArray[i].priority == 0) { // Normal message
		        if (!ifExistInfoIcon) {
		            var infoMessagesPrint = '<div class="row"><div class="inlineNotes"><i class="icon_inline_info cell"></i><ul class="inline_info cell">';
		            infoMessagesPrint += '<li>' + strMessagesArray[i].strMessage + '</li>';
		            ifExistInfoIcon = true;
		        } else {
		            infoMessagesPrint += '<li>' + strMessagesArray[i].strMessage + '</li>';
		        }


		    } else if (strMessagesArray[i].priority == 1) { // Warning

		        if (!ifExistWaringIcon) {
		            var waringMessagesPrint = '<div class="row"><div class="inlineNotes"><i class="icon_inline_warning cell"></i><ul class="inline_warning cell">';
		            waringMessagesPrint += '<li>' + strMessagesArray[i].strMessage + '</li>';
		            ifExistWaringIcon = true;
		        } else {
		            waringMessagesPrint += '<li>' + strMessagesArray[i].strMessage + '</li>';
		        }


		    }

		}

		if (ifExistWaringIcon) {
		    waringMessagesPrint += '</ul></div></div>';
		    document.write(waringMessagesPrint);
		}


		if (ifExistInfoIcon) {
		    infoMessagesPrint += '</ul></div></div>';
		    document.write(infoMessagesPrint);
		}
		if (numMessages == 0) {
		    document.write('<div class="row"><div class="inlineNotes"><i class="icon_inline_info cell"></i><div class="inline_info cell">' + 'There is no license information.' + '</div></div></div>');
		}