using System;
using System.Net.NetworkInformation;

class Program
{
    static void Main(string[] args)
    {
        string host = "http://locahost:3000"; // replace with the hostname or IP address to ping

        Ping ping = new Ping();
        PingReply reply = ping.Send(host);

        if (reply.Status == IPStatus.Success)
        {
            Console.WriteLine("Ping to {0} successful. Time: {1}ms", host, reply.RoundtripTime);
        }
        else
        {
            Console.WriteLine("Ping to {0} failed. Status: {1}", host, reply.Status);
        }

        Console.ReadKey();
    }
}
