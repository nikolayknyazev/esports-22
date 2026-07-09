using CyberSportsPortal.Data.Model.Views;
using System.Collections.Generic;

namespace CyberSportsPortal.Core.Services;

public class PlayerTasksService
{
    public List<PlayerView> FilterPlayers(List<PlayerView> players, string filter)
    {
        List<PlayerView> filteredPlayers = new List<PlayerView>();

        foreach (PlayerView player in players)
        {
            if (player.NickName.ToLower().Contains(filter.ToLower()) || player.CombinedName.ToLower().Contains(filter.ToLower())) {
                filteredPlayers.Add(player);
            }
        }

        return filteredPlayers;
    }
}