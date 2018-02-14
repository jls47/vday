$(document).ready(function(){
    var valentinelist = [
        "This relationship is my life's best work, and will likely always be it.",
        "My love for you is deeper than the marianas trench, and they'll both crush a can in a split second!",
        "There are few words I know to describe the way I feel.  They should have sent a poet.",
        'Every day that passes, I find that I love you more and more.',
        'I would go through all nine circles of hell and back for you.  Treachery would be difficult, but doable.',
        "It's hard to get you out of my mind; just like that damned Havana song.",
        "You've caught my eye like a Chinese Finger Trap catches my fingers, Valentine!",
        "I am every bit yours, just as you are every bit mine.",
        "You make every bad day worth every moment.",
        "Ed Sheeran lyrics go here",
        "Who knew that I'd spent my whole life looking for you only to run into you over a plate of chili fries?",
        "You get me through every day.  Your presence is immeasurable.",
        "You cement my will like a stone.  You make me feel like I can do anything.",
        "I never knew how complete I could feel until being with you.",
        "You are, have been, and always will be beautiful.",
        "I'm so happy when we can watch horrible things together.",
        "I so often wish we could just freeze time together.",
        "If loving you is wrong, I don't wanna be right.",
        "It's hard to believe we became such a perfect pairing.",
        "If you were a library rental I'd get the shit fined out of me for not returning you.",
        "I will always be here for you; physically or otherwise.",
        "I hope your day is as nice as your boobs, Valentine.",
        "You are my center, my strength, my motivation.  Don't ever stop.",
        "You're the best partner in crime a dope like me could ask for.",
        "Roses aren't a good symbol of our love.  Roses wilt and don't last.  Our love is more like a GameBoy; lasts even through a bomb blast.",
        "You're at work while I'm writing these.  Please come back soon.",
        "You grew on me like E.Coli grew on Chipotle's veggies!",
        "If you were The Thing you could assimilate me anytime.",
        "I love you for who you are but those boobs and lips sure don't hurt.",
        "I would do things that would put me in front of the Hague for you.",
        "I wake up every morning and choose you.",
        "Ever since being with you, nobody else has been worth even thinking about.",
        "Don't ever give up on me; I'll never give up on you.",
        "You are my happy place.",
        "I'm so glad we're one of those couples that won't settle on a dumb ass baby name.",
        "If I had a nickel for every time I think of you, I'd have a nickel, cause you never leave my mind.",
        "Every day I wake up next to you becomes even more worth it than the last.",
        "It's only been 834 days for us.  Let's bump that up by a few thousand.",
        "You are my home.  Wherever we are, I'm content.",
        "I'm not sure that I knew who I was before I met you.",
        "For pulling me out of myself, I can never repay you.  I owe you my life, my love, and my continued faith in myself and in us.",
    ]

    $(".heart").click(function(){
        var rand = Math.random() * 40;
        console.log(Math.round(rand));
        rand = Math.round(rand);
        $(".vtext").html("<h1>"+valentinelist[rand]+"</h1>");
    });


})