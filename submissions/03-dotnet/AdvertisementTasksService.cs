using CyberSportsPortal.Data.Model.Views;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CyberSportsPortal.Core.Services;

public class AdvertisementTasksService
{
    public List<KeyValuePair<int, int>> GetProbabilities(List<AdvertisingCompanyView> companies)
    {
        int currentYear = DateTimeOffset.Now.Year;

        var companiesPayments = companies.ToDictionary(
            c => c.Id,
            c => c.PaymentInfo
            .Where(p => p.PaymentDate.Year == currentYear)
            .Sum(p => p.PaymentSum)
        );

        decimal totalPayments = companiesPayments.Values.Sum();

        List<KeyValuePair<int, int>> companiesProbabilities = new List<KeyValuePair<int, int>>();

        foreach(var paymentSum in companiesPayments)
        {
            int probability;

            if (totalPayments == 0)
            {
                probability = 1;
            } else
            {
                probability = (int)Math.Floor(paymentSum.Value / totalPayments * 100m);
            }

            probability = Math.Max(1, probability);

            companiesProbabilities.Add(new KeyValuePair<int, int>(paymentSum.Key, probability));
        }

        return companiesProbabilities;
    }
}