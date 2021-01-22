
function kilometerToMeter(kilometer) {
    if (kilometer < 0 || (typeof (kilometer) != "number")) {
        return "You have enter a Wrong Value!!!!";
    }
    else {
        //converting kilometer to meter
        var meter = kilometer * 1000;
        return meter;
    }
}


function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0 || typeof (watch) == "string" || typeof (phone) == "string" || typeof (laptop) == "string") {
        return "You have enter a Wrong Value!!!!";
    }
    else {
        //calculating budget
        var budget = watch * 50 + phone * 100 + laptop * 500;
        return budget;
    }
}

function hotelCost(days) {
    if (days < 0 || (typeof (days) != "number")) {
        return "You have enter a Wrong Value!!!!";
    }
    //for upto 10 days
    else if (days <= 10) {
        var hotelCost = days * 100;
        return hotelCost;
    }
    //for upto 20 days
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainder = days - 10;
        var nextDays = remainder * 80;
        var total = firstTenDays + nextDays;
        return total;
    }
    //for over 20 days
    else {
        var firstTenDays = 10 * 100;
        var nextTenDays = 10 * 80;
        var remainder = days - 20;
        var nextDays = remainder * 50;
        var total = firstTenDays + nextTenDays + nextDays;
        return total;
    }
}


function megaFriend(friends) {
    if ((friends.length <= 0) || (typeof (friends) != "object")) {
        return "Alas!! You have no friends!!!!";
    }
    //calculating highest length of element of an array
    else {
        var megaFriend = "";
        var maxLength = 0
        for (var i = 0; i < friends.length; i++) {
            var length = friends[i].length;
            if (maxLength < length) {
                maxLength = length;
                megaFriend = friends[i];
            }
        }
        return megaFriend;
    }
}

