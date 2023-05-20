export class Team {
    queryName: string;
    names: string[];

    constructor(queryName: string, names: string[]) {
        this.queryName = queryName;
        this.names = names;
    }

    displayName() {
        return this.queryName.replace('_', ' ')
    }

    hasName(name: string) {
        const lowerNames = this.names.map(name => name.toLowerCase())
        return lowerNames.indexOf(name.toLowerCase()) >= 0;
    }
}

export const teams: Team[] = [
    new Team('Bournemouth', ['Bournemouth']),
    new Team('Arsenal', ['Arsenal']),
    new Team('Aston_Villa', ['Aston Villa', 'Aston_Villa', 'Villa']),
    new Team('Brentford', ['Brentford']),
    new Team('Brighton', ['Brighton']),
    new Team('Chelsea', ['Chelsea']),
    new Team('Crystal_Palace', ['Crystal Palace', 'Palace']),
    new Team('Everton', ['Everton']),
    new Team('Fulham', ['Fulham']),
    new Team('Leeds', ['Leeds', 'Leeds United', 'LUFC']),
    new Team('Leicester', ['Leicester City', 'Leicester']),
    new Team('Liverpool', ['Liverpool', 'LFC']),
    new Team('Manchester_City', ['Manchester City', 'Man City', 'Citeh', 'MC']),
    new Team('Manchester_United', ['Manchester United', 'Manchester Utd', 'Man Utd', 'SCUM', 'MUFC']),
    new Team('Newcastle', ['Newcastle', 'Newcastle Utd', 'Newcastle United']),
    new Team('Nottingham_Forest', ['Nottingham Forest', 'Nottingham', 'Forest']),
    new Team('Southampton', ['Southampton']),
    new Team('Tottenham_Hotspurs', ['Tottenham Hotspurs', 'Spurs', 'Tottenham']),
    new Team('West_Ham_United', ['West Ham United', 'West Ham', 'Hammers']),
    new Team('Wolverhampton_Wanderers', ['Wolverhampton Wanderers', 'Wolverhampton', 'Wolves']),
]


