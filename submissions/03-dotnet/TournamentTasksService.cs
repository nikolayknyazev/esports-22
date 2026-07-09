using CyberSportsPortal.Data.Entities;
using CyberSportsPortal.Data.Model.Enums;
using CyberSportsPortal.Data.Model.Views;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CyberSportsPortal.Core.Services;

public class TournamentTasksService
{
    public string GetTournamentStatus(Tournament tournament)
    {
        if (DateTimeOffset.Now > tournament.StartDate)
        {
            return $"{(DateTimeOffset.Now < tournament.EndDate ? "В процессе" : "Окончен")}";
        }
        return "Не начался";
    }

    public int GetPlayersFromCountryCount(List<Player> players, Country country)
    {
        return players.Count(p => p.Country == country);
    }

    public string GetTeamParticipantsNameString(List<string> teamNames)
    {
        return string.Join(", ", teamNames);
    }

    public int ComparePrizes(string prizeA, string prizeB)
    {
        int.TryParse(prizeA, out var a);
        int.TryParse(prizeB, out var b);
        return a.CompareTo(b);
    }

    public Dictionary<int, decimal> GetTournamentVictoryProbabilities(List<TeamWithVictoryProbabilities> teams, Dictionary<int, int> standings)
    {
        return new Dictionary<int, decimal>();
    }
}