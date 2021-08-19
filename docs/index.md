<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo</title>
  <link rel="stylesheet" href="./demo-page/template.css">
  <link rel="stylesheet" href="./main/template.css">
</head>

<body>
  <h1 class="page-header">Embed Demo</h1>

  <section class="card">
    <h3>Audio Player</h3>
    <div id="audio-player"></div>
  </section>

  <script src="https://player.3qsdn.com/js3q.latest.js"></script>
  <script>
    const audioPlayer = new js3q({
      dataid: '7a651a31-7390-11ea-97a4-002590c750be',
      container: 'audio-player',
      skin: 'local',
      template: {
        htmlFile: './audio/template.html',
        cssFile: './audio/template.css'
      }
    });
  </script>
</body>

</html>

## Hi

<div id="player"></div>

<script src="https://player.3qsdn.com/js3q.latest.js"></script>
<script>
  const player = new js3q({
    container: 'player',
    dataid: 'c3eaa1e0-c608-11ea-b206-0cc47a188158'
  });
</script>
