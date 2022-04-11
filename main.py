import discord
import os
from dotenv import load_dotenv
from discord.ext import commands, tasks

load_dotenv()

intents = discord.Intents(messages = True, guilds = True, reactions = True, members = True, presences = True)
bot = commands.Bot(command_prefix = "!", intents = intents, help_command = None)

@bot.event
async def on_ready():
    print("Bot logged in")

@bot.command()
async def test(ctx):
    await ctx.send("Hello")

@bot.command()
async def spamping(ctx, member, repeat):
    for x in range(0, int(repeat)):
        await ctx.send(f"{member}")

token = os.getenv("TOKEN")
bot.run(token, bot = False)

