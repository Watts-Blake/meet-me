"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@demo.com",
          username: "Demo-User",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demo2@demo.com",
          username: "Demo-User-2",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          email: "demo3@demo.com",
          username: "Demo-User-3",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          username: "Delfina_Lebsack",
          email: "Dorian.Auer@hotmail.com",
          hashedPassword:
            "$2a$10$OBQ.Hnbffr9v0bl6jAMEzucJuqWJ3.PzpCczAlZOxG6mwGUAh6ef6",
          bio: "Sequi pariatur officia neque hic ut.",
        },
        {
          username: "Theron_Streich89",
          email: "Yvette_Tillman84@yahoo.com",
          hashedPassword:
            "$2a$10$spAUUuVQnELTmdI3DT16Zel2rO8JScIgKejHnWLrz2jBQTrSjnWPi",
          bio: "Voluptate velit commodi.",
        },
        {
          username: "Romaine_Kub53",
          email: "Sarina.Douglas@gmail.com",
          hashedPassword:
            "$2a$10$xRGoSwlBKpK/8CIVioyoU.n3xbftEJ18YfBEFrLw65F6Spp52kaYS",
          bio: "Numquam unde possimus sed accusamus sed.",
        },
        {
          username: "Malinda_Larson84",
          email: "Adalberto_Crist@gmail.com",
          hashedPassword:
            "$2a$10$GLq4b0eE0cTOKs64eFo7Mur/5Iwt.ZaP8JHpARhTR1lMUb3y.RzfC",
          bio: "Temporibus qui voluptatem omnis minus animi voluptas.",
        },
        {
          username: "Timothy47",
          email: "George_Lubowitz@hotmail.com",
          hashedPassword:
            "$2a$10$NiwtNwY/ICAfe0hSlY8ZDOm5KB8TvJW7ns155F.BH4dbMazAHKbHu",
          bio: "Magnam aut inventore ullam et eius nulla ab harum deleniti.",
        },
        {
          username: "Elizabeth_Satterfield10",
          email: "Stanton21@hotmail.com",
          hashedPassword:
            "$2a$10$xjoK6zC0QNBeCjLfbSBLpeijtY8HtdROehKDVfsGDQZR2hKqBQbs.",
          bio: "Molestiae explicabo at.",
        },
        {
          username: "Leola48",
          email: "Esteban_Bode60@gmail.com",
          hashedPassword:
            "$2a$10$msw/8Jd5ANrQkIMvLxXs8.s4BrT3DPbh90AiW0qqoE56DRqz60Kcu",
          bio: "Id distinctio enim reprehenderit et non.",
        },
        {
          username: "Bella80",
          email: "Breanna67@hotmail.com",
          hashedPassword:
            "$2a$10$aRDyw.LA93d8Vm2Zc3QI5ewVDObOQnpjHVUnseXzw0b5wpgMR7YG.",
          bio: "Quia magnam eum ullam nemo.",
        },
        {
          username: "Earnestine_Hammes21",
          email: "Bernhard.McCullough@gmail.com",
          hashedPassword:
            "$2a$10$c41kLs0Sq7Wp8WaalN08j.99Hx91a7E8/GQbhEe7flsgbWYLKVEQW",
          bio: "Est non voluptates qui maiores qui corrupti voluptatibus.",
        },
        {
          username: "Bethel_Barton21",
          email: "Randal14@yahoo.com",
          hashedPassword:
            "$2a$10$d0DB84jL8UpyjYOL0xJfXePZDaKv8XNGoNX0p3azg5C2EFa5QKDHu",
          bio: "Aut sapiente ut vitae.",
        },
        {
          username: "Clair_Muller32",
          email: "Harrison.Walter@hotmail.com",
          hashedPassword:
            "$2a$10$UhEZ6lWGaTN/v/D5NvUTSOPqsJb37v4JsBL9zWtZvQYo2lIyFqRYS",
          bio: "Ratione distinctio fuga temporibus officia pariatur itaque molestiae.",
        },
        {
          username: "Winnifred_Hansen51",
          email: "Brent.Mitchell42@hotmail.com",
          hashedPassword:
            "$2a$10$yEMB4lu4QWxhApxUzO8ekulEmGNVDBMiASbdvfBN2z6e8SeYTe6AC",
          bio: "Non est voluptate soluta facilis.",
        },
        {
          username: "Kaycee.OReilly",
          email: "Reilly58@yahoo.com",
          hashedPassword:
            "$2a$10$WI9vq1xh9hjxnCjTPHcwcO74CV6LJtLjve/wcJGpmRWmjnXSEoRcG",
          bio: "Eos quisquam reiciendis laboriosam recusandae recusandae.",
        },
        {
          username: "Santos.Lubowitz19",
          email: "Meagan62@hotmail.com",
          hashedPassword:
            "$2a$10$SMiMWINzHaV4MuFXXVeNi.d1i.OJ44wfxjE6uXfZvLBpuuhdSV2.S",
          bio: "Rerum architecto enim harum esse.",
        },
        {
          username: "Anika43",
          email: "Maureen40@gmail.com",
          hashedPassword:
            "$2a$10$g4ypxbjjLBWUWAUFfDdVIeQPe8jehWsCXKJUri3sur4QYdOU2UWZu",
          bio: "Sunt est eos provident quas nobis vel nam blanditiis voluptatum.",
        },
        {
          username: "Mikel.Goyette45",
          email: "Georgianna.Raynor@hotmail.com",
          hashedPassword:
            "$2a$10$COPRTCrT9YGT/ksBHl8dTeuwhPc1nGA7WgJ/FHH4X8ULD66GkbeyO",
          bio: "Dolore quis aut et quidem eos pariatur natus est inventore.",
        },
        {
          username: "Rodolfo43",
          email: "Austen_Mayert@hotmail.com",
          hashedPassword:
            "$2a$10$odItgTXA3u/j/THv0VG9e.R4yEajHuifod/kEtzCGRDhLL./sTBDW",
          bio: "Deleniti laboriosam aut ea cum distinctio asperiores omnis delectus.",
        },
        {
          username: "Vergie_Nader49",
          email: "Kellie.Boehm@yahoo.com",
          hashedPassword:
            "$2a$10$f2tF4jZAPE8L0zZRyIKV0.5E7wAnJiMV/HO.CWxFLsRpoI8jR2Rxi",
          bio: "Ducimus rerum natus officiis molestiae facilis repudiandae aperiam.",
        },
        {
          username: "Winona91",
          email: "Josiane.Goldner@yahoo.com",
          hashedPassword:
            "$2a$10$3EgO1EneQM0lrjEcEx/ideorCh86lM5OE5LEf7CDa4o/T.61qvnrG",
          bio: "Nemo ut est.",
        },
        {
          username: "Bell.Mante",
          email: "Peyton44@gmail.com",
          hashedPassword:
            "$2a$10$/p06U7Bz5NXgfTTxEpD5cutqvVvtEOpEXcCMM5WM96Yjs.agb2v8e",
          bio: "Alias amet commodi distinctio dolorum placeat assumenda sequi voluptas.",
        },
        {
          username: "Judd_Goyette",
          email: "Gustave.Dach@yahoo.com",
          hashedPassword:
            "$2a$10$jf.cgBboaJJd46vO2KgqMu7yJa6x6it0QnXr2piojDcmIXj8SQQuy",
          bio: "Tenetur et molestias ut vero non accusamus porro.",
        },
        {
          username: "Shaniya.OReilly",
          email: "Birdie19@yahoo.com",
          hashedPassword:
            "$2a$10$OiuEB8T.JbUadm6abeTuHu91tRR94iTpfRw3bYGg8FeCm.fA5Fzl.",
          bio: "Dolores qui ut accusamus veritatis eum.",
        },
        {
          username: "Malachi.West26",
          email: "Anais78@gmail.com",
          hashedPassword:
            "$2a$10$awbVJq1xA3q8RDQvNRa.2e/WxjKDIst5KprEr18VUlCKQ7JC9vLtG",
          bio: "Nam eligendi laboriosam et rerum quia vitae aut et.",
        },
        {
          username: "Enrique.Hane5",
          email: "Junius90@hotmail.com",
          hashedPassword:
            "$2a$10$Ze2IjZ2dACrfa8m5T/Na3O5E49NyYxExJ23ejPLN.3EuWb7X72nWi",
          bio: "Animi nobis magni quas mollitia reiciendis repellendus quia error.",
        },
        {
          username: "Audreanne.Hartmann",
          email: "Morton_Mante41@yahoo.com",
          hashedPassword:
            "$2a$10$NWUMQ2MuNE6.RZGkzZNeiOgB679qmJYa3F.Uu8ozHYXikV/x2iVyu",
          bio: "Eaque nulla molestias eum iure.",
        },
        {
          username: "Ricky_Rowe90",
          email: "Tristian.Gutmann43@gmail.com",
          hashedPassword:
            "$2a$10$yEfsZ.s647KZ0A37zQJhc.FlCU3LyqVY.FB0DEECmzHBBVvsmRL1K",
          bio: "Cumque non sapiente exercitationem error eos.",
        },
        {
          username: "Savion.Goyette",
          email: "Gregorio_Mohr27@gmail.com",
          hashedPassword:
            "$2a$10$MEyRd06EO1BeEvsjynFje.fF/r0m3thbOAoBMPTH4cO/ncahhUMta",
          bio: "At aliquam iure itaque animi est esse natus fuga quo.",
        },
        {
          username: "Kolby.Abbott67",
          email: "Damion.Rohan@gmail.com",
          hashedPassword:
            "$2a$10$4s7VB6At1YLa6se7hYwPL.W.f/.z4wxXT7flW4yzM1lYtrs36jm2u",
          bio: "Dolore corporis quo.",
        },
        {
          username: "Talia.Schiller88",
          email: "Jody62@hotmail.com",
          hashedPassword:
            "$2a$10$.PhaDn8BwFFAVxKM95ewv.itRlpTFnyaz0uqCOkaNBCflHr7sPXJ2",
          bio: "Provident ut aliquid ut perferendis.",
        },
        {
          username: "Maynard43",
          email: "Darian.Heller@yahoo.com",
          hashedPassword:
            "$2a$10$2zQAUAwRxbn/GzDjaENmNe1qJk.kl4rkzHcvayLVs4sNGSWUB/11S",
          bio: "Nostrum et ad.",
        },
        {
          username: "Faye.Osinski11",
          email: "Nyasia_Wolf@hotmail.com",
          hashedPassword:
            "$2a$10$8Z0La7IZ6H27A3/N2sRtiuhlBYgO1a8ul2KT3BFUlb2oswIwm5LJ2",
          bio: "Minima unde asperiores repellendus.",
        },
        {
          username: "Devyn.Langosh66",
          email: "Raymond67@gmail.com",
          hashedPassword:
            "$2a$10$uxzYWyQr2tUKHaEQqdG9.Ozir6F0shsSIBYKEQilUy.s4eaF5cjJ.",
          bio: "Quo vitae beatae fugiat et nemo.",
        },
        {
          username: "Marjolaine.Beahan",
          email: "Brisa48@hotmail.com",
          hashedPassword:
            "$2a$10$XEyVEEaH.BCZFDMC.5GR/uQ/zBkfQpedfDatQ8MUTxL1Xr.CSTMK2",
          bio: "Quia cumque fuga.",
        },
        {
          username: "Haylie42",
          email: "Pink4@hotmail.com",
          hashedPassword:
            "$2a$10$QD9v6gP14fCgum3ygIfUAejowI3iBqzOb6hnjkIccjs5dq4cg533i",
          bio: "Nobis aut reiciendis voluptatum consectetur.",
        },
        {
          username: "Xander73",
          email: "Armand_Koch51@hotmail.com",
          hashedPassword:
            "$2a$10$AbqNho3nPaYLu.TICmdDW.Y/Vq96Q8BgartiRI5zJrl.oMWpsdU4e",
          bio: "Ex doloremque molestiae.",
        },
        {
          username: "Kellen52",
          email: "Thad_Medhurst79@hotmail.com",
          hashedPassword:
            "$2a$10$0p6sPEjT5M0sA7moJiw1ROvbP4uZSjSNo0VSpg2R.KWUOU/shU7j2",
          bio: "Voluptas eos explicabo libero animi quis quia a qui fuga.",
        },
        {
          username: "Angie_Stiedemann35",
          email: "Laverna.Shields@yahoo.com",
          hashedPassword:
            "$2a$10$m4pXOR1qKxikyJQBRUjRVesEQStR804oWn.EadI1w4S.w/2TcdjDC",
          bio: "Voluptatem quis et ullam.",
        },
        {
          username: "Vaughn.Franey10",
          email: "Lila55@gmail.com",
          hashedPassword:
            "$2a$10$3/YHdSgvhLb4ZlwV2no6TuVYhrIZ6xBGIi/FJXuj6MNwObn.Sd3dS",
          bio: "Et debitis ea hic molestiae excepturi veniam quia non.",
        },
        {
          username: "Jayson.Maggio",
          email: "Delphia31@yahoo.com",
          hashedPassword:
            "$2a$10$VepIaQCDOeyTRW3KpUPXOOKVuKPDkebyeXBfs6cL7b02ZbbmUH1US",
          bio: "Expedita est repellendus iure eaque omnis.",
        },
        {
          username: "Ed.Lemke44",
          email: "Vicente22@gmail.com",
          hashedPassword:
            "$2a$10$KB..D/ezkYC1vrWrdabwIu/YJlhuIFHuoZvxvpqruKMZ0aq3wx1KO",
          bio: "Tempore quos possimus itaque dolor ratione quisquam.",
        },
        {
          username: "Cecile.Wolf",
          email: "Kasey.Schiller90@hotmail.com",
          hashedPassword:
            "$2a$10$oPL2.2oCmEkDmmc./YrhkefffuHD1/jZvLYV9jZsRDzj1RSKPuxqu",
          bio: "Totam fuga deserunt ut tempore qui magni omnis.",
        },
        {
          username: "Jessica66",
          email: "Zoey93@hotmail.com",
          hashedPassword:
            "$2a$10$gE3WN1nz29xS907pPGLD0O7JD1dkSdTrt3kidNE/qs1p/GfHB7RrO",
          bio: "Enim quasi at similique nisi.",
        },
        {
          username: "Shaniya.Moore",
          email: "Cary_Sauer55@hotmail.com",
          hashedPassword:
            "$2a$10$MKypMhVcFOWcLUFx4EyG1.X9d9.PHqI1lxuHp9k3coL.FqNKOIERK",
          bio: "Harum ex qui amet.",
        },
        {
          username: "Remington45",
          email: "Tod_Johnston@yahoo.com",
          hashedPassword:
            "$2a$10$R4V5F6obJ85bdApXTP/T4uKEEg.03o.CfYaUaxK9qUDKjXyLprXEO",
          bio: "Rerum consequatur debitis tempore rem minus reprehenderit.",
        },
        {
          username: "Hassan_McCullough99",
          email: "Rodger.Kerluke@gmail.com",
          hashedPassword:
            "$2a$10$sKwc9RzmgzVRydaFKzeTAOY2R.bqHIDVrrF5fjjk.zHxsED7Az9AG",
          bio: "Sunt eius rerum necessitatibus ad et.",
        },
        {
          username: "Arlie.Rau",
          email: "Oda95@hotmail.com",
          hashedPassword:
            "$2a$10$y5EQ8kJstge3v4BrrZjbL.qbv.c6cnug/is4zXAW.BnvonHhpk86m",
          bio: "Illo odit suscipit eos fugiat.",
        },
        {
          username: "Darren98",
          email: "Donnie_Dietrich83@gmail.com",
          hashedPassword:
            "$2a$10$NlbzKtydKvprWIogaewineIOof3jlIrBYFpSzWrlrooMw0uPeh.Ge",
          bio: "Ducimus nam magnam quis cupiditate cumque sit tempore.",
        },
        {
          username: "Pablo.Stroman56",
          email: "Javon_Nicolas@hotmail.com",
          hashedPassword:
            "$2a$10$x5LlzK/7OXflUbP.n8NaferPkSSoBtNBad3ZLuCHpPySarwE9GRiC",
          bio: "Totam voluptas omnis sunt illum consequuntur mollitia adipisci nostrum molestias.",
        },
        {
          username: "Emie_Rippin",
          email: "Paolo_Haley@gmail.com",
          hashedPassword:
            "$2a$10$wv7w/p01pFdF1ZDc5oTHYu5mqmvvnc0a1cJmRoYHlALWkUmmMo.XO",
          bio: "Dolorem eius rerum hic non.",
        },
        {
          username: "Francis71",
          email: "Layne74@gmail.com",
          hashedPassword:
            "$2a$10$dmmgVpjF9jDBbCBSI7oywuzwx1Z8hWyOHtAPXCEvlKAA7eReRm9ne",
          bio: "Et quas corrupti.",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-User", "Demo-User-2", "Demo-User-3"] },
      },
      {}
    );
  },
};
