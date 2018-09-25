			// More info about config & dependencies:
			// - https://github.com/hakimel/reveal.js#configuration
			// - https://github.com/hakimel/reveal.js#dependencies
			Reveal.initialize({
				controls: true,
				keyboard: true,
				multiplex: {
					// Example values. To generate your own, see the socket.io server instructions.
					secret: null, // null so the clients do not have control of the master presentation
					id: 'da0eae246b511a0d', // id, obtained from socket.io server
					url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh' // Location of socket.io server
				},
				dependencies: [
					{ src: 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.3.5/socket.io.min.js', async: true },
					{ src: 'plugin/multiplex/client.js', async: true },
					{ src: 'plugin/markdown/marked.js' },
					{ src: 'plugin/markdown/markdown.js' },
					//{ src: 'plugin/notes/notes.js', async: true },
					{ src: 'plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } }
				]
			});