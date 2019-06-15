task :default do
  sh "browserify -o bundle.js -t [ babelify --presets [ @babel/preset-env ] ] app.js"
end

task :budo do
  sh "budo --open"
end

task :style do
  sh "hjson -c style.hjson > style.json"
  sh "gl-style-validate style.json"
end
