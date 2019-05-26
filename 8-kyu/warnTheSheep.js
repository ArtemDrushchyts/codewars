function warnTheSheep(queue) {
    if (queue[queue.length - 1] == 'wolf') {
        return 'Pls go away and stop eating my sheep';
    } else {
        queue.reverse();
        for (let i = queue.length - 1; i < queue.length; i--) {
            if (queue[i] == 'wolf') {
                return 'Oi! Sheep number ${i}! You are about to be eaten by a wolf!'
            }
        }

    }
}