using CyberSportsPortal.Data;
using CyberSportsPortal.Data.Model.Views;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CyberSportsPortal.Core.Services;

public class TeamTasksService(CyberSportsContext context)
{
    private readonly CyberSportsContext _context = context;

    public int GetTeamIncomeForYear(int teamId, int year)
    {
        var team = _context.Teams.First(x => x.Id == teamId);

        int income = 0;

        foreach(var result in team.TeamTournamentResults)
        {
            if (result.Place is null) continue;

            var tournament = result.Tournament;

            if (tournament.EndDate.Year != year) continue;

            var prize = tournament.TournamentPrizes.FirstOrDefault(p => p.Place == result.Place.Value);

            if (prize is not null) income += prize.Prize;
        }

        return income;
    }

    public List<RatingView> GetNewRatings(List<MatchHistoryView> matches, List<RatingView> oldRatings)
    {
        return oldRatings;
    }
}