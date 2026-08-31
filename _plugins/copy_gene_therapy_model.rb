# frozen_string_literal: true

require "fileutils"

Jekyll::Hooks.register :site, :post_write do |site|
  # The generated site is already fully processed. Prevent GitHub Pages from
  # running Jekyll again and dropping Next.js's underscore-prefixed `_next` assets.
  FileUtils.touch(File.join(site.dest, ".nojekyll"))

  export_dir = File.join(site.source, "apps", "gene-therapy-model", "out")
  export_index = File.join(export_dir, "index.html")

  unless File.exist?(export_index)
    Jekyll.logger.warn(
      "Gene therapy model:",
      "static export not found; run `pnpm --dir apps/gene-therapy-model build`"
    )
    next
  end

  destination = File.join(site.dest, "projects", "gene-therapy-model")
  FileUtils.mkdir_p(destination)
  FileUtils.cp_r("#{export_dir}/.", destination)
  Jekyll.logger.info("Gene therapy model:", "copied static export")
end
