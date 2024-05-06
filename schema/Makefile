JAR_FILE := openapi-generator-cli.jar
API_FILE := api.yml
OUT_DIR := out
GENERATOR_URL := https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.5.0/openapi-generator-cli-7.5.0.jar

.PHONY: generate clean

generate: $(OUT_DIR) $(JAR_FILE)
	java -jar $(JAR_FILE) generate -g typescript-axios -i $(API_FILE) -o $(OUT_DIR)

$(OUT_DIR):
	mkdir -p $@

$(JAR_FILE):
	wget $(GENERATOR_URL) -O $@

clean:
	rm -rf $(OUT_DIR) $(JAR_FILE)
