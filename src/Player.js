
class Player {
    constructor(champion) {
        this.name = champion.name;
        this.gender = this.getGender(champion.titles)
        this.winYears = this.getWinYears(champion.titles)
        this.total = champion.titles.length
    }

    getGender(titles) {
        let title = titles[0].title
        let gender = "";
        if(title === "Gentlemen's Singles"){
            gender = "Gentleman";
        }else if (title === "Ladies' Singles"){
            gender = "Lady"
        }
        return gender;
    }

    getWinYears(titles) {
        let winYears = " "
        for (var i = 0; i < titles.length; i++) {
            winYears += titles[i].year + " "
        }
        return winYears;
    }

}
export default Player;