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
    tintColor: 'green',
    template: {
      htmlFile: './audio/template.html',
      cssFile: './audio/template.css'
    }
  });
</script>
